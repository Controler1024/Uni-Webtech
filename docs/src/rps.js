document.getElementById("rps");

function getanswer(decision) {
  
  var number = Math.round(Math.random()*2).toString(); // generates a random number between 0 and 2 (for 3 cases: rock, paper, scissor)
  var options = ["Schere", "Stein", "Papier"]
  if(decision == number)
  {
    alert("Draw\nYou choosed: " + options[decision-1] + "\nOpponent choosed: " + options[number-1]);
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
        alert("You lost!\nYou choosed: " + options[decision-1] + "\nOpponent choosed: " + options[number-1]);
      }
      else
      {
        alert("You won!\nYou choosed: " + options[decision-1] + "\nOpponent choosed: " + options[number-1]);
      }
    }
    else if(number < decision)
    {
      alert("You won!\nYou choosed: " + options[decision-1] + "\nOpponent choosed: " + options[number-1]);
    }
    else
    {
      alert("You lost!\nYou choosed: " + options[decision-1] + "\nOpponent choosed: " + options[number-1]);
    }
  }
}
