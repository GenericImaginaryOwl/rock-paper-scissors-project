let humanScore = 0;
let computerScore = 0;

const optionsContainer = document.querySelector(".options-container"); 
const resultsContainer = document.querySelector(".results-container");
optionsContainer.addEventListener("click", playRound);


function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function endGame() {
    resultsContainer.textContent = `The game has ended.\nFinal score: You - ${humanScore}. Computer - ${computerScore}.`
    optionsContainer.removeEventListener("click", playRound);
}

function playRound(event) {
    const humanChoice = event.target.textContent;
    const computerChoice = getComputerChoice();

    if(humanChoice === computerChoice) {
        resultsContainer.textContent = "This round ended in a draw.";   
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"
        || humanChoice === "Paper" && computerChoice === "Rock"
        || humanChoice === "Scissors" && computerChoice == "Paper") {   
        resultsContainer.textContent = `You won this round: ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    }
    else {
        //the list of possible options besides player losing (and invalid input) is exhausted by this point
        resultsContainer.textContent = `You lost this round: ${humanChoice} is beaten by ${computerChoice}.`;
        computerScore += 1;
    }

    if(humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}