var username = "";
const d = new Date();
var time = 0;
var time2 = 0;
var diff = 0;
var timed = false;
var answer = "x";

function hide(id) {
  var object = element(id)
  object.style.display = "none";
  object.style.visibility = "hidden";
}

if (getCookie() != "") {
  hide("username");
  timed = true;
  username = getCookie();
  time = d.getTime();
}

function setCookie(value) {
  document.cookie = "username=" + value + ";";
  return value;
}

function getCookie() {
  return document.cookie.split("=")[1];
}

function element(id) {
  return document.getElementById(id);
}

// input
document.addEventListener("keydown",  e => {
  if (e.keyCode === 13) {
    e.preventDefault();
    username = document.getElementById("usernametext").value;
    hide("username");
    setCookie(username);
    if (!timed) {
      time = d.getTime();
    }
    document.removeEventListener("keydown");
  }
});

// send
function send() {
  time2 = d.getTime();
  diff = time - time2;
  document.getElementById("player").value = username;
  document.getElementById("answer").value = answer;
  document.getElementById("time").value = diff;
  document.getElementById('form').submit();
}
