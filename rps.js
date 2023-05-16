const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const buttons = document.querySelectorAll('button');
let playerChose = document.querySelector('.playerChose');
let computerChose = document.querySelector('.computerChose');
let result = document.querySelector('.result');
let playerPoints = document.querySelector('.playerPoints');
let computerPoints = document.querySelector('.computerPoints');

function getComputerChoice() { 
    const choices = ["Rock", "Paper", "Scissors"]
    let computerSelection = Math.floor(Math.random() * choices.length);
    return (choices[computerSelection]);
}

let computerChoice;
let playerScore = 0;
let computerScore = 0;

function round(playerChoice) {
    let computerChoice = getComputerChoice();
    playerChose.textContent = `Player choice: ${playerChoice}`;
    computerChose.textContent = `Computer choice: ${computerChoice}`;
    if (playerChoice == computerChoice) {
        result.textContent = "Tie!"
    }
    if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            result.textContent = "Rock crushes scissors. You win!";
            playerScore++;
        }
        else if (computerChoice == "Paper") {
            result.textContent = "Paper covers rock. You lose!";
            computerScore++;
        }
    }
    if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            result.textContent = "Paper covers rock. You win!";
            playerScore++;
        }
        else if (computerChoice == "Scissors") {
            result.textContent = "Scissors cut paper. You lose!";
            computerScore++;
        }
    }
    if (playerChoice == "Scissors") {
        if (computerChoice == "Rock") {
            result.textContent = "Rock crushes scissors. You lose!";
            computerScore++;
        }
        else if (computerChoice == "Paper") {
            result.textContent = "Scissors cut paper. You win!";
            playerScore++;
        }
    }
    playerPoints.textContent = `Player points: ${playerScore}`;
    computerPoints.textContent = `Computer points : ${computerScore}`;

    if (playerScore >= 5) {
        result.textContent = "YOU WIN!";
        buttons.forEach(e => {
            e.disabled = true;
        });
    }

    if (computerScore >= 5) {
        result.textContent = "YOU LOSE!";
        buttons.forEach(e => {
            e.disabled = true;
        });
    }
}

rockBtn.addEventListener('click', () => round('Rock'));
paperBtn.addEventListener('click', () => round('Paper'));
scissorsBtn.addEventListener('click', () => round('Scissors'));