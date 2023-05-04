# Protocol Analyzer - Installation and Setup
Authors: James Carr
**Updated May 05, 2023**

## Prerequisites
In order to use Protocol Analyzer, you will need a development account and API keys for Google's Speech-to-text API and OpenAI's GPT API. For this guide, we will be using a single OpenAI API key and the Google API json file; however, you may use other authentication methods if you choose. 

Copy this repo with git:
```
git clone https://github.com/Taurophylax/protocol-analyzer.git
```

## Requirements
This project uses Python 3.10.10 in development and testing. It is recommended to use this version or later. 
Chrome browser v113 was used in testing. Edge and Firefox should work; Safari may not support the audio recording feature.

For dependencies, refer to requirements.txt

Install dependencies with pip:
```
pip install -r requirements.txt
```

## Setup
Once the git repo has been cloned to your machine, you have created your API keys, and you have installed the required packages in your environment, you can proceed with configuration steps below:

1. Upload your Google API .json file to the top-level directory (with the requirements.txt file)

2. Create a file called .flaskenv containing the following information:
```
FLASK_APP=protan.py
GOOGLE_APPLICATION_CREDENTIALS=<your json file>
OPENAI_API_KEY=<your openAI API key>
```

3. Run the following command to start the Flask web service:
```
flask run
```
You should now be able to access the tool in a web browser on http://127.0.0.1:5000

If you are unable to run the flask command:
- Ensure you are in the top-level directory: protocol-analyzer/ 
- If you are using a conda or python venv, ensure it is activated
- Ensure the dependencies are installed using "pip freeze"
- Ensure your firewall is not blocking the Flask service or port 5000


Run in to any other issues? Feel free to use this git repo or send me an e-mail: james.carr87@gmail.com
