document.getElementById("rps");

function getanswer(decision) {
  var ergebnis = "Ergebnis: "
  decision = decision - 1;
  var number = Math.round(Math.random()*2).toString(); // generates a random number between 0 and 2 (for 3 cases: rock, paper, scissor)
  var options = ["Schere", "Stein", "Papier"]
  if(decision == number)
  {
    ergebnis += "Draw\nYou choosed: " + options[decision] + "\nOpponent choosed: " + options[number];
  }
  else if (decision != number)
  {
    /*
    1 Scissor
    2 Stone
    3 Paper
    */
    if(decision == 3)
    {
      if(number == 1)
      {
        ergebnis += "You lost!\nYou choosed: " + options[decision] + "\nOpponent choosed: " + options[number];
      }
      else
      {
        ergebnis += "You won!\nYou choosed: " + options[decision] + "\nOpponent choosed: " + options[number-1];
      }
    }
    else if(number < decision)
    {
      ergebnis += "You won!\nYou choosed: " + options[decision] + "\nOpponent choosed: " + options[number];
    }
    else
    {
      ergebis += "You lost!\nYou choosed: " + options[decision] + "\nOpponent choosed: " + options[number];
    }
  }
document.getElementById("ergebnis").innerHTML = ergebnis;
}
