file = open('question.txt').read()
array = file.split('\n')
global x
global q
x = -1
q = 1
def foo(t):
  try:
    return t.split(": ")[1]
  except:
    return t
def cycle():
  global x
  global q
  if x == 0:
    print("q" + str(q) + " = {\n  'question': '" + i + "',")
  if x == 1:
    print("  'a': '" + i + "',")
  if x == 2:
    print("  'b': '" + i + "',")
  if x == 3:
    print("  'c': '" + i + "',")
  if x == 4:
    print("  'd': '" + i + "',")
  if x == 5:
    print("  'answer': '" + i + "',")
for i in array:
  x += 1
  i = foo(i)
  cycle()
  if x > 5:
    x = 0