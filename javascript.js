console.log("Hello");

function getComputerChoice() {

    switch( Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice(){
    //assuming the input is always valid here
    return prompt("Please enter Rock Paper or Scissors");
}

console.log(getComputerChoice());
console.log(getHumanChoice());