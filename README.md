# Protocol Analyzer (in progress)

This is a web application that allows you to take written lab protocols and extract meta data, potentially to be saved to some kind of database or file.
The text can be pasted into a text box or read into your microphone and transcribed. 

## Who is this for?

This application is for research labs that must process and save a large amount of experiment data. Lab staff write or type their protocols and notes, sometimes as large walls of texts. These protocols/notes are often saved in a database with metadata such as experiment name, researcher name, sample IDs, organism, tissue type, etc... Saving the data from hundreds or thousands of experiments can be very tedius. This app aims to speed this up by allowing direct saving of lab notes and protocols to a database or file. 

## Road Map
- [x] Create foundation as a Flask app
- [x] Add basic form to capture the text from user
- [x] Allow user to read their protocol into the microphone
- [x] Transcribe the audio into text using Google API
- [ ] Use basic extraction variables for testing purposes
- [ ] Allow user or admin to customize variables to be extracted
- [ ] Extract variables using OpenAI API
- [ ] Aesthetics (CSS)
- [ ] OCR for handwritten lab notes
- [ ] Future features as desired
  
## Notes
Speech-to-text uses Google's speech recognition API and uses lossless audio for best results.
The data extraction utilizes custom GPT 4.0 API calls
The audio, text input, and extracted data are NOT stored anywhere unless it is intentionally being saved to a database or file. 
I am not responsible if any data is stored by Google or Open AI servers.
