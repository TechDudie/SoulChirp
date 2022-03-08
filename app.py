from flask import Flask, request, redirect, send_from_directory, Response
from lib.tools import *
from lib.database import *
from lib.question import *
import sys
import time

global players
global qid
global playerlist
global status
app = Flask('app', static_url_path="")
players = 0
qid = 0
status = 0
playerlist = ["TechnoDot", "SirAlexBigBrain"] # temp names

db = DB()
@app.route('/')
def root():
  return '<h1>Hello, World!</h1>\n<p>I think you\'re looking for <a href=\'https://flaskprojc.technologydev.repl.co/index.html\'>this</a>!'

@app.route('/css/<path:path>')
def css_(path):
  return send_from_directory('css', path)

@app.route('/js/<path:path>')
def js_(path):
  return send_from_directory('js', path)

@app.route('/index.html', methods=["GET","POST"])
def index():
  global players
  global playerlist
  if request.method == 'POST':
    if request.form['code'] == "314159":
      players += 1
      return load("redirect.html").replace("index.html", "wait.html")
    else:
      return load("index.html")
  else:
    return load('index.html')

@app.route('/game.html')
def game():
  return gameui(q, qid)

@app.route('/receive.html', methods=["GET","POST"])
def receive():
  if request.method == 'POST':
    print(request.form)
    print(point(request.form["t"]))
    plyr = request.form["player"]
    pts = db.get(plyr)
    if pts == None:
      db.store(plyr, 0)
      pts = db.get(plyr)
    print(q[qid]["answer"])
    print(request.form["ans"].upper())
    if q[qid]["answer"] == request.form["ans"].upper():
      db.store(plyr, pts + point(request.form["t"]))
    print(db.db)
    return load("wait.html")
  else:
    return load("redirect.html")

@app.route('/dashboard.html', methods=["GET","POST"])
def dashboard():
  global qid
  global status
  if request.method == 'POST':
    qid = int(request.form["qid"])
    status = True
    time.sleep(2)
    status = False
    return dashboardui(players, db.db, qid)
  else:
    return dashboardui(players, db.db, qid)

# system

@app.route('/wait.html')
def wait_html():
  return load("wait.html")

@app.route('/qid.html')
def qid_html():
  return str(status)

# debug
@app.route('/delcookie.html')
def delcookie():
  return load('delcookie.html')


#if sys.argv[1] == "repl":
#  app.run(host='0.0.0.0', port=8080)
