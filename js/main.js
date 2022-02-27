var input = "";
const regex = new RegExp('^[0-9]{6}$');

// print
function print(text) {
  document.getElementById("terminal").value += text;
}

// send
function send(code) {
  document.getElementById("code").value = code;
  document.getElementById('form').submit();
}

// main
document.addEventListener("keydown",  e => {
  if (e.keyCode === 8)  {
    if (input == "") {
      e.preventDefault();
    } else {
      input = input.slice(0,-1);
    }
  } else if (e.keyCode === 13)  {
    e.preventDefault();
    if (regex.test(input)) {
      print("\nValid code. Connecting...");
      send(input)
    } else {
      print("\nInvalid code. Try again.\n")
    }
    input = "";
  } else {
    input += String.fromCharCode(e.keyCode);
  }
});

print("Welcome to TechnoQuiz. Enter game code:\n")