const yourScore = document.getElementById("yourScore");
const compScore = document.getElementById("compScore");
let yScore = 0;
let cScore = 0;
const yours = document.getElementById("yours")
const comps = document.getElementById("comps")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const result = document.getElementById("result")


function choice(input){
    const choices =["rock","paper","scissors"];
    let compRndm = (Math.floor(Math.random()*3))
    let compchoice = choices[compRndm];
    let userchoice = input;
    comps.innerHTML = `${compchoice.toUpperCase()}`
    yours.innerHTML = `${input.toUpperCase()}`

        if (userchoice === compchoice) {
            result.innerHTML= 'Tie!';
          } 
          else if (userchoice === 'rock' && compchoice === 'paper') {
            result.innerHTML= 'Computer wins!';
            cScore++;
          } 
          else if (userchoice === 'paper' && compchoice === 'rock') {
            result.innerHTML= 'You win!';
            yScore++;
          } 
          else if (userchoice === 'paper' && compchoice === 'scissors') {
            result.innerHTML= 'Computer wins!';
            cScore++;
          } 
          else if (userchoice === 'scissors' && compchoice === 'paper') {
            result.innerHTML= 'You win!';
            yScore++;
          } 
          else if (userchoice === 'scissors' && compchoice === 'rock') {
            result.innerHTML= 'Computer wins!'
            cScore++;
          }
           else if (userchoice === 'rock' && compchoice === 'scissors') {
            result.innerHTML= 'You win!';
            yScore++;
          }

          compScore.innerHTML = cScore;
          yourScore.innerHTML = yScore;
            
        }
    
    


