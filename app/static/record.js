const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let mediaRecorder;
let audioChunks = [];

// engage microphone
async function getAudioStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return stream;
  } catch (err) {
    console.error('Error accessing microphone:', err);
  }
}

// click start button
startButton.addEventListener('click', async () => {
  const audioStream = await getAudioStream();

  if (!audioStream) return;

  mediaRecorder = new MediaRecorder(audioStream, { mimeType: 'audio/webm;codecs=opus' });

  mediaRecorder.addEventListener('dataavailable', (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  });

  // stop button
  mediaRecorder.addEventListener('stop', async () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm;codecs=opus' });
  
    // Create a FormData object to hold the audio data
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recorded_audio.webm');
  
    // Send the FormData to the server
    const response = await fetch('/save_audio', {
      method: 'POST',
      body: formData
    });
    // display message when file is saved
    if (response.ok) {
      document.getElementById('status').textContent = 'Transcription in process...';
    
      // AJAX request to transcribe the audio
      const functionResponse = await fetch('/execute_transcription/recorded_audio.flac');
      const functionResult = await functionResponse.json();
    
      // Update the text box value with the result of the transcription
      document.getElementById('transcribed').value = functionResult.result;
      document.getElementById('status').textContent = 'Transcription complete';
    } else {
      document.getElementById('status').textContent = 'Error transcribing audio!';
    }
  });

  startButton.disabled = true;
  stopButton.disabled = false;

  audioChunks = [];
  mediaRecorder.start();
});

stopButton.addEventListener('click', () => {
  if (!mediaRecorder) return;

  startButton.disabled = false;
  stopButton.disabled = true;

  mediaRecorder.stop();
});