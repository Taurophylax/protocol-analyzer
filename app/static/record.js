const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

let mediaRecorder;
let audioChunks = [];

async function getAudioStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return stream;
  } catch (err) {
    console.error('Error accessing microphone:', err);
  }
}

startButton.addEventListener('click', async () => {
  const audioStream = await getAudioStream();

  if (!audioStream) return;

  mediaRecorder = new MediaRecorder(audioStream, { mimeType: 'audio/webm;codecs=opus' });

  mediaRecorder.addEventListener('dataavailable', (event) => {
    if (event.data.size > 0) {
      audioChunks.push(event.data);
    }
  });

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
  
    if (response.ok) {
      document.getElementById('status').textContent = 'File is READY';
    
        // AJAX request to transcribe the audio
      const functionResponse = await fetch('/execute_transcription');
      const functionResult = await functionResponse.json();
    
      // Update the text box value with the result
      document.getElementById('transcribed').value = functionResult.result;
    } else {
      document.getElementById('status').textContent = 'Error saving file on the server';
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