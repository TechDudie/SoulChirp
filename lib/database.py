class DB:
  def __init__(self):
    self.db = {}
  def get(self, key):
    try:
      return self.db[key]
    except:
      return None
  def store(self, db, key, value):
    self.db[key] = value