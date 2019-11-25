document.getElementById("rps");

function getanswer(message) {
  var number = Math.round(Math.random()*2).toString(); // generates a random number between 0 and 2 (for 3 cases: rock, paper, scissor)
  var penis = message + " " + number;
  alert(penis);
}
