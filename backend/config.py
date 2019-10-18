import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'I am the bone of my sword.'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
