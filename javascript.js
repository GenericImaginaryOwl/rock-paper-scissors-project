console.log("Hello");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice(){
    //assuming the input is almost always valid here
    humanInput = prompt("Please enter Rock Paper or Scissors");
    return humanInput.toLowerCase().replace(humanInput.charAt(0), humanInput.charAt(0).toUpperCase());
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("This round ended in a draw");
        humanScore += 0.5;
        computerScore += 0.5;    
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"
          || humanChoice === "Paper" && computerChoice === "Rock"
          || humanChoice === "Scissors" && computerChoice == "Paper") {   
        console.log(`You won this round: ${humanChoice} beats ${computerChoice}.`);
        humanChoice += 1;
    }
    else {
        //the list of possible options besides player losing is exhausted by this point
        console.log(`You lost this round: ${humanChoice} is beaten by ${computerChoice}.`)
        computerScore +=1;
    }
}

playRound(getHumanChoice(), getComputerChoice());

//console.log(getComputerChoice());
//console.log(getHumanChoice());