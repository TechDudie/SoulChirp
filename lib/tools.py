def load(file):
  return open(file).read()
def point(time):
  return round((((int(time) / 1000) + 0.8) ** (-1/2)) * 1000)
def dashboardui(playernum, playerlist, questionid):
  html = load("dashboard.html")
  list = ""
  for i in playerlist:
    list += "<h3>" + i + "</h3>"
  html = html.replace("PLAYERNUM", str(playernum))
  html = html.replace("<h1>PLAYERLIST</h1>", list)
  html = html.replace("123456", str(questionid))
  return html
def gameui(questiondb, qid):
  try:
    html = load("game.html")
    qid = int(qid)
    html = html.replace("QUESTION", htmlformat(questiondb[qid]["question"]))
    html = html.replace("ANSWERFORA", htmlformat(questiondb[qid]["a"]))
    html = html.replace("ANSWERFORB", htmlformat(questiondb[qid]["b"]))
    html = html.replace("ANSWERFORC", htmlformat(questiondb[qid]["c"]))
    html = html.replace("ANSWERFORD", htmlformat(questiondb[qid]["d"]))
    return html
  except:
    html = load("game.html")
    qid = 0
    html = html.replace("QUESTION", htmlformat(questiondb[qid]["question"]))
    html = html.replace("ANSWERFORA", htmlformat(questiondb[qid]["a"]))
    html = html.replace("ANSWERFORB", htmlformat(questiondb[qid]["b"]))
    html = html.replace("ANSWERFORC", htmlformat(questiondb[qid]["c"]))
    html = html.replace("ANSWERFORD", htmlformat(questiondb[qid]["d"]))
    return html
def htmlformat(text):
  text = text.replace("<", "&lt;")
  text = text.replace(">", "&gt;")
  text = text.replace("'", "&quot;")
  text = text.replace("\"", "&quot;")
  return text