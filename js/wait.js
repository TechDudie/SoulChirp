quotes = ["Genius machine?", "Trigger happy or true genius?", "Were you toooooooo fast?"];
qt = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerHTML = qt;

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