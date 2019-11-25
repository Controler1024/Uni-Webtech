document.getElementById("rps");

function getanswer(message) {
  var number = Math.round(Math.random()*3).toString();
  var penis = message + " " + number;
  alert(penis);
}
