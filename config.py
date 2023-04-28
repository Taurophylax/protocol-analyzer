import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or '2k049i@jd#4JDO83.I8NOo(ijer#d9L38%nk999u.jS%IKJLojdl642el' #set env key in production!
