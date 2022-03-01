var username = "";
var d = new Date();
var time = d.getTime();
var time2 = 0;
var diff = 0;
var timed = false;

function hide(id) {
  var object = element(id)
  object.style.display = "none";
  object.style.visibility = "hidden";
}

if ((typeof getCookie() === 'string') && (getCookie() != "")) {
  hide("username");
  timed = true;
  username = getCookie();
  time = d.getTime();
}

function setCookie(value) {
  document.cookie = "username=" + value + ";secure";
  return value;
}

function getCookie() {
  return document.cookie.split("=")[1];
}

function element(id) {
  return document.getElementById(id);
}

var question = element('question').value = questiontoask;
var a = element('a').value = AA;
var b = element('b').value = BB;
var c = element('c').value = CC;
var ddd = element('d').value = DD;

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
function send(answer) {
  var d2 = new Date();
  time2 = d2.getTime();
  diff = 0 - time + time2;
  document.getElementById("player").value = username;
  document.getElementById("ans").value = answer;
  document.getElementById("t").value = diff;
  document.getElementById('form').submit();
}
