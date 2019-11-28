document.getElementById("rps");

function getanswer(decision) {
  
  var number = Math.round(Math.random()*2).toString(); // generates a random number between 0 and 2 (for 3 cases: rock, paper, scissor)
  
  if(decision = number)
  {
    alert("draw");
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
        alert("You lost!");
      }
      else
      {
        alert("You won!");
      }
    }
  }
}
