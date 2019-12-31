from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask_restplus import Api
import hashlib
import requests
from backend.config import Config
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
app = Flask(__name__)
app.config['SECRET_KEY'] = 'super secret'

cred = credentials.Certificate('../serviceKey.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://slate-bba57.firebaseio.com/'
})

ref = db.reference('/slate')

class User ():
    def __init__(self, id, username, email, password, timetable, friends):
        self._id = id
        self._username = username
        self._email = email
        self._password = password
        self._timetable = timetable
        self._friends = friends

class TimeSlot ():
    def __init__(self, start, end, day):
        self._start = start
        self._end = end
        self._day = day

class Friend ():
    def __init__(self, friendid):
        self._friendid = friendid

@app.route('/')
def index():
    return 'Hello'

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    snapshot = ref.child(username).child('password').get()
    if (password==snapshot):
        #print(snapshot)
        ref.child(username).update({
            'isLoggedIn': 1
        })
        session['username'] = username
        return "login successful", 200
    return "login failed", 404
@app.route('/logou', methods=['POST'])
def logou():
    username=session['username']
    ref.child(username).update({
        'isLoggedIn':0
    })
    return "logout successful", 200

@app.route('/login', methods=['GET'])
def login2():
    username = session['username']
    snapshot = ref.child(username).child('isLoggedIn').get()
    if (snapshot==1):
        return "isLoggedIn", 200
    return "Error", 404

@app.route ('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    password = data['password']
    email = data['email']
    ref.child(username).set({
        'username': username,
        'password': password,
        'email': email,
        'isLoggedIn': 0
    })
    return "successful", 200

@app.route ('/password', methods=['POST'])
def changePassword():
    data = request.get_json()
    username = session['username']
    password = data['password']
    ref.child(username).update({
        'password': password
    })
    return "successful", 200

@app.route ('/email', methods=['POST'])
def changeEmail():
    data = request.get_json()
    username = session['username']
    email = data['email']
    ref.child(username).update({
        'email': email
    })
    return "successful", 200

@app.route('/addblock', methods=['POST'])
def addBlock():
    data = request.get_json()
    name = data['name']
    start = data['start']
    end = data['end']
    day = data['day']
    duration = data['duration']
    username = session['username']
    ref.child(username).child('blocks').push().set({
        'name': name,
        'start': start,
        'end': end,
        'day': day,
        'duration': duration
    })
    return "successful", 200

@app.route('/removeblock', methods=['POST'])
def removeBlock():
    data = request.get_json()
    name = data['name']
    start = data['start']
    end = data['end']
    day = data['day']
    duration = data['duration']
    username = session['username']
    snapshot = ref.child(username).child('blocks').order_by_key().get()
    for key, val in snapshot.items():
        if (val['name']==name and val['start']==start and val['end']==end and val['day']==day and val['duration']==duration):
            ref.child(username).child('blocks').child(key).delete()
            break
    return "successful", 200

@app.route('/getblock', methods=['GET'])
def getBlock():
    username = session['username']
    snapshot = ref.child(username).child('blocks').order_by_key().get()
    return jsonify(snapshot)

@app.route('/find',methods=['POST'])
def find():
    data = request.get_json()
    friendname = data['fn']
    print(friendname)
    snapshot = ref.child(friendname).child('password').get()
    print(snapshot)
    return snapshot,200

    limit = len(friendname) // 2 + 1
    listofchildren = ref.order_by_child("username")  # this is the list of people
    RUTA=[]
    for friend in listofchildren:
        #Code for query goes here
        current =friend.child("username").get()
        for i in range(0,min(len (friendname), len(current))):
            k=lcs(friendname,current)
            if(k >= limit):
                RUTA.append(current)
                print(current)
    if not RUTA:
        return RUTA, 200 #nothing is found
    return RUTA,200


def lcs(X, Y):
    # find the length of the strings
    m = len(X)
    n = len(Y)

    # declaring the array for storing the dp values
    L = [[None] * (n + 1) for i in range(m + 1)]

    """Following steps build L[m + 1][n + 1] in bottom up fashion 
    Note: L[i][j] contains length of LCS of X[0..i-1] 
    and Y[0..j-1]"""
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0 or j == 0:
                L[i][j] = 0
            elif X[i - 1] == Y[j - 1]:
                L[i][j] = L[i - 1][j - 1] + 1
            else:
                L[i][j] = max(L[i - 1][j], L[i][j - 1])

                # L[m][n] contains the length of LCS of X[0..n-1] & Y[0..m-1]
    return L[m][n]

if __name__ == '__main__':
    app.run()

'''
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config.from_object(Config)
#Before initial, set the database URI to our database.
db = SQLAlchemy(app)
daysinweek = {'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6, 'Sunday':7}

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False, unique=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.password}')"

class Time(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, unique=False)
    start = db.Column(db.Integer, nullable=False, unique=False)
    end = db.Column(db.Integer, nullable=False, unique=False)
    day = db.Column(db.Integer, nullable=False, unique=False)
    def __repr__(self):
        return f"Time('{self.user_id}', '{self.day}', '{self.start}', '{self.end}')"
    def __str__(self):
        return f"{{'start':'{self.start}', 'end':'{self.end}', 'day':'{self.day}'}}"
    def __lt__(self, other):
        return self.start < other.start

class Friend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, unique=False)
    friend_id = db.Column(db.Integer, nullable=False, unique=False)
    def __repr__(self):
        return f"Friend('{self.user_id}', '{self.friend_id}')"
    def __str__(self):
        return str(self.friend_id)

@app.route("/api/info")
def api_info():
    info = {
       "ip" : "127.0.0.1",
       "hostname" : "everest",
       "description" : "Main server",
       "load" : [ 3.21, 7, 14 ]
    }
    return jsonify(info)

@app.route('/')
def hello_world():
    request_finished
    return 'Hello World!',4

@app.route('/login', methods = ['GET','POST'])
def login():
    data=request.json
    username = data["username"]
    print(username)
    password = data["password"]
    print(password)
    try:
        auth_results = User.query.filter(User.username == username, User.password == hashlib.sha256(password.encode('ascii')).hexdigest()).one()
    except:
        db.session.commit()
        return "authentication failed", 401

    db.session.commit()
    return "login successful", 200
    

@app.route('/signup', methods = ['GET','POST','OPTIONS'])
#Get returns the HTML, Post return what the code below does
#that's the gooal...
def signup():
    data=request.json
    username = data["username"]
    email = data["email"]
    password = str(data["password"])

    #checks if email or username already exists
    email_query = User.query.filter(User.email == email).all()
    uname_query = User.query.filter(User.username == username).all()
    if (len(email_query) > 0 or len(uname_query) > 0):
        return 'username or email already exists', 409

    user = User(username=username, email=email, password=hashlib.sha256(password.encode('ascii')).hexdigest())
    db.session.add(user)
    db.session.commit()
    return 'signup successful', 201
   # print("Either Get or Option")
   # return 'signup successful', 201
    #else if the method is GET


@app.route('/addtime', methods = ['POST'])
def addtime():
    data = request.json
    user_id = int(data['user_id'])
    #time is stored in the database in minutes
    start = int(data['start_h'])*60+int(data['start_m'])
    end = int(data['end_h'])*60+int(data['end_m'])
    #day of the week is stored as an integer between 1 and 7
    day = daysinweek[data['day']]
          
    #check validity of time interval
    if (start >= end or start < 0 or end > 1440):
        return 'invalid time interval', 409
    tquery=Time.query.filter(Time.user_id == user_id, Time.day == day).all()
    
    #check if time interval overlaps with existing time intervals 
    for i in tquery:
        if (not ((i.start >= end) or (i.end <= start))):
            return 'overlapping time interval', 409
    
    time = Time(user_id=user_id, start=start, end=end, day=day)
    db.session.add(time)
    db.session.commit()
    return 'time interval successfully added', 201

@app.route('/gettime', methods = ['POST'])
def gettime():
    data = request.json
    user_id = int(data['user_id'])
    
    #formats user's schedule into a length 7 list of lists
    #ith list is the user's sorted list of busy time intervals on the ith day
    jsonstr = '{['
    for day in range (1, 8):
        jsonstr += '['
        tquery=Time.query.filter(Time.user_id == user_id, Time.day == day).all()
        tquery.sort()
        for i in tquery:
            jsonstr += str(i) + ','
        if (len(tquery) > 0):
            jsonstr = jsonstr[:-1]
        jsonstr += '],'
    jsonstr = jsonstr[:-1] + ']}'
    return jsonstr, 200

@app.route('/addfriend', methods = ['POST'])
def addfriend():
    data = request.json
    user_id = int(data['user_id'])
    friend_id = int(data['friend_id'])
    friend = Friend(user_id=user_id, friend_id=friend_id)
    db.session.add(friend)
    friend = Friend(user_id=friend_id, friend_id=user_id)
    db.session.add(friend)
    db.session.commit()
    return 'friend added', 201

@app.route('/getfriends', methods = ['POST'])
def getfriends():
    data = request.json
    user_id = int(data['user_id'])
    jsonstr = '{['
    fquery=Friend.query.filter(Friend.user_id == user_id).all()
    for i in fquery:
        jsonstr += str(i) + ','
    if (len(fquery) > 0):
        jsonstr = jsonstr[:-1]
    jsonstr += ']}'
    return jsonstr, 200

@app.route('/comparetime',methods = ['POST'])
def comparetime():
    data=request.json #incomming from user
    user_id=data["user_id"]
    friend_id=data["friend_id"]
    jsonstr="{"
    for day in range (1, 8):
        jsonstr=jsonstr+"["
        minetime=Time.query.filter(Time.user_id == user_id,Time.day == day).all()
        urtime = Time.query.filter(Time.user_id == friend_id, Time.day == day).all()
        minetime.sort()
        urtime.sort()
        start=0
        Valid=[]
        for i in range (0, 1450,10):
            Valid.append(i)
        for timeblock in minetime:
            for i in range(timeblock.start , timeblock.end):
                Valid.remove(i)
        for timeblock in urtime:
            for i in range(timeblock.start, timeblock.end):
                Valid.remove(i)
        if (len(Valid)==0):
            if(day<7):
                jsonstr=jsonstr + "],"
            else:
                jsonstr=jsonstr +"]"

            continue
        start=Valid[0]
        last=Valid[0]
        for i in range (start+10, 1450, 10):
            if(Valid.contains(i)):
                if((i==1440) and (last == i - 10)):
                    jsonstr = jsonstr + f"{{'start':'{start}', 'end':'{i}', 'day':'{day}'}}"

                if (last==i-10):
                    last=i
                    continue
                start = i
                last=i
            elif last != i-10:
                continue
            else:
                jsonstr =jsonstr + f"{{'start':'{start}', 'end':'{i}', 'day':'{day}'}}"
        if (day <7 ):
            jsonstr=jsonstr+"],"
        else:
            jsonstr=jsonstr+"]"
    jsonstr=jsonstr+"}"
    return jsonstr,200
'''

