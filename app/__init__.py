from flask import Flask
import openai
import os
from config import Config

app = Flask(__name__) #must be before importing routes
app.config.from_object(Config)
openai.api_key = os.getenv("OPENAI_API_KEY")

from app import routes
