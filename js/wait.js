quotes = ["Genius machine?", "Trigger happy or true genius?", "Were you toooooooo fast?"];
qt = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerHTML = qt;

/*
// wait until signal
var current = 0;
function makeHttpObject() {try {return new XMLHttpRequest();}catch (error) {}try {return new ActiveXObject("Msxml2.XMLHTTP");}catch (error) {}try {return new ActiveXObject("Microsoft.XMLHTTP");}catch (error) {}throw new Error("Could not create HTTP request object.");}
var request = makeHttpObject();
request.open("GET", "qid.html", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4) {
    current = request.responseText;
  }
};

function check() {
  var request = makeHttpObject();
  request.open("GET", "qid.html", true);
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      currint = parseInt(current);
      text = parseInt(request.responseText);
      console.log(currint);
      console.log(typeof currint);
      console.log(text);
      console.log(typeof text);
      console.log(currint !== text);
      if (currint !== text) {
        window.location.replace("game.html");
      }
    }
  };
}
//check();
setInterval(check, 1000)
*/

var current;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       current = parseInt(xhttp.responseText);
    }
};
xhttp.open("GET", "qid.html", true);
xhttp.send();

var past = [];
function check() {
  var now = 0;
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      now = parseInt(xhttp2.responseText);
      console.log(current);
      console.log(typeof current);
      console.log(now);
      console.log(typeof now);
      console.log(now - current);
      past.push(now);
      if (typeof current == "undefined") {
        return null;
      }
      if (current == 0) {
        return null;
      }
      /*
      if ((now - current) == 0) {
        return null;
      }
      if (now - current) {
        location.replace("game.html");
      }
      */
      if (past.every((val, i, arr) => val === arr[0])) {
        console.log("hmm");
        past = [];
        location.replace("game.html");
      }
    }
  };
  xhttp2.open("GET", "qid.html", true);
  xhttp2.send();
}
setInterval(check, 1000);

/*
function check() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var now = xhttp.responseText;
      console.log(now);
      if (now === "True") {
        location.replace("game.html");
      }
      //location.replace("game.html");
    }
  };
  xhttp.open("GET", "qid.html", true);
  xhttp.send();
}

setInterval(check, 1000);
*/
