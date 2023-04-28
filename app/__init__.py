from flask import Flask
from config import Config

app = Flask(__name__) #must be before importing routes
app.config.from_object(Config)

from app import routes


