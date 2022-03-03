from lib.database import *
db = DB()
db.store("hello","world")
print(db.get("hello"))