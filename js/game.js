var input = "";
var username = "";

// input
document.addEventListener("keydown",  e => {
  if (e.keyCode === 8)  {
    if (input == "") {
      e.preventDefault();
    } else {
      input = input.slice(0,-1);
    }
  } else if (e.keyCode === 13)  {
    e.preventDefault();
    username = input;
    document.removeEventListener("keydown");
  } else {
    input += String.fromCharCode(e.keyCode);
  }
});

// a
function a() {
  send(username, "a");
}

// b
function b() {
  send(username, "b");
}

// c
function c() {
  send(username, "c");
}

// d
function d() {
  send(username, "d");
}

// send
function send(player, score) {
  document.getElementById("player").value = player;
  document.getElementById("score").value = score;
  document.getElementById('form').submit();
}