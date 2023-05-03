const uploadButton = document.getElementById("upload-button");
const uploadForm = document.getElementById("uploadaudio");

uploadButton.addEventListener("click", function() {
  uploadForm.style.display = "inline";
});

// Check if the 'status' parameter is present in the URL query string
var statusParam = new URLSearchParams(window.location.search).get('status');
if (statusParam !== null && statusParam === "1") {
    document.getElementById("status").innerHTML = "Audio file processing...";
} else if (statusParam !== null && statusParam === "2e") {
    document.getElementById("status").innerHTML = "Error decoding file";
} else if (statusParam !== null && statusParam === "3") {
  document.getElementById("status").innerHTML = "Transcription complete";
  document.getElementById('transcribed').value = new URLSearchParams(window.location.search).get('result');
}