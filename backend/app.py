from flask import Flask, Blueprint, request
from flask_sqlalchemy import SQLAlchemy
from flask_restplus import Api
import hashlib

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=False)
    email = db.Column(db.String(120), nullable=False, unique=False)
    password = db.Column(db.String(120), nullable=False, unique=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email},' '{self.password}')"


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/login', methods = ['POST'])
def login():
    data = request.json
    email = data['email']
    password = hashlib.sha256(data['password'].encode('ascii')).hexdigest()
    try:
        auth_results = User.query.filter(User.email == email, User.password == password).one()
    except:
        return "authentication failed", 401

    return "login successful", 200


@app.route('/signup', methods = ['POST'])
def signup():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    user = User(username=username, email=email, password=hashlib.sha256(password.encode('ascii')).hexdigest())
    db.session.add(user)
    db.session.commit()
    return "congratulations, you have successfully signed up", 201


if __name__ == '__main__':
    app.run()

