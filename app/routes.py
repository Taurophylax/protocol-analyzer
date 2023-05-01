from flask import render_template, request, jsonify
import os
from pydub import AudioSegment
from app import app
from google.cloud import speech

# index page - currently blank
@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html', title='Home')

# analyzer page - where most of the action happens
@app.route("/analyzer")
def analyzer():
    return render_template('analyzer.html', title='Analyzer')

# save, convert, and remove audio files
@app.route('/save_audio', methods=['POST'])
def save_audio():
    audio_file = request.files.get('audio')

    if audio_file:
        file_path = os.path.join('uploaded/', audio_file.filename)
        audio_file.save(file_path)
        #Convert webm to flac -- Requires ffmpeg! -> "sudo apt install ffmpeg"
        audio = AudioSegment.from_file(file_path, format="webm")
        flac_path = os.path.join('uploaded/', 'recorded_audio.flac')
        # Save the flac file
        audio.export(flac_path, format="flac")
        # Remove the webm file
        os.remove(file_path)
        return jsonify({'success': True}), 200
    else:
        return jsonify({'success': False}), 400

# transcribe audio file
@app.route('/execute_transcription', methods=['GET'])
def execute_transcription():
    speech_file = 'uploaded/recorded_audio.flac'
    client = speech.SpeechClient()

    with open(speech_file, "rb") as audio_file:
        content = audio_file.read()

    # Google API Calls
    audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.FLAC,
        sample_rate_hertz=48000,
        language_code="en-US",
    )

    operation = client.long_running_recognize(config=config, audio=audio)
    response = operation.result(timeout=30) #30 second timeout

    for result in response.results:
        # The first option, alternatives[0], has the highest confidence
        transcript = format(result.alternatives[0].transcript)
        print("Confidence: {}".format(result.alternatives[0].confidence))  #present confidence score
    os.remove(speech.file) #clean up flac file
    return {'result': transcript}