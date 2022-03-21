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
      print("\nInvalid format. Try again.\n")
    }
    input = "";
  } else {
    input += String.fromCharCode(e.keyCode);
  }
});

print(`Welcome to SoulChirp.

TechDudie/SoulChirp is licensed under the GNU General Public License v3.0. Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
Further consequential use of this site results in your agreement of the usage of cookies, that they are enabled, and that we take no responsibility whatsoever if your client crashes or suffers any technological issues.
Hacking or any actions with malicious intent could be punishable with the proper authorities.
Failure to comply with these rules will result in your service being terminated abruptly without any warning or your consent, and we do not take any responsibility for anything that consequentially occurs whatsoever.

Written by TechDudie/TechnoDot in Hypertext Markup Language, Cascading Style Sheets, JavaScript, and Python.

Enter game code:
`);
