def load(file):
  return open(file).read()
def point(time):
  return round((((int(time) / 1000) + 0.8) ** (-1/2)) * 1000)