from flask import Flask, request, redirect, send_from_directory, Response
from lib.tools import *
from lib.database import *
from lib.questions import *

app = Flask('app', static_url_path="")

db = DB()
@app.route('/')
def root():
  return '<h1>Hello, World!</h1>'

@app.route('/css/<path:path>')
def css_(path):
  return send_from_directory('css', path)

@app.route('/js/<path:path>')
def js_(path):
  return send_from_directory('js', path)

@app.route('/index.html', methods=["GET","POST"])
def index():
  if request.method == 'POST':
    if request.form['code'] == "314159":
      return load("redirect.html").replace("index.html", "game.html")
    else:
      return load("index.html")
  else:
    return load('index.html')

@app.route('/game.html')
def game():
  return load('game.html')

@app.route('/receive.html', methods=["GET","POST"])
def receive():
  if request.method == 'POST':
    print(request.form)
    print(point(request.form["t"]))
    return load("redirect.html")
  else:
    return load("redirect.html")

@app.route('/delcookie.html')
def delcookie():
  return load('delcookie.html')

app.run(host='0.0.0.0', port=8080)