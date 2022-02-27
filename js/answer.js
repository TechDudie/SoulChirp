// print
function print(text) {
  document.getElementById("terminal").value += text;
}

// send
function send(answer) {
  document.getElementById("code").value = answer;
  document.getElementById('form').submit();
  document.getElementById("code").value = "0";
}

// main
/*
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
*/