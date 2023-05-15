const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
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
    } else if (playerChoice == "Rock") {
        if (computerChoice == "Scissors") {
            result.textContent = "Rock crushes scissors. You win!";
            return playerScore++;
        }
        else if (computerChoice == "Paper") {
            result.textContent = "Paper covers rock. You lose!";
            return computerScore++;
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            result.textContent = "Paper covers rock. You win!";
            return playerScore++;
        }
        else if (computerChoice == "Scissors") {
            result.textContent = "Scissors cut paper. You lose!";
            return computerScore++;
        }
    } else if (playerChoice == "Scissors") {
        if (computerChoice == "Rock") {
            result.textContent = "Rock crushes scissors. You lose!";
            return computerScore++;
        }
        else if (computerChoice == "Paper") {
            result.textContent = "Scissors cut paper. You win!";
            return playerScore++;
        }
    }
    playerPoints.textContent = `Player points: ${playerScore}`;
    computerPoints.textContent = `Computer points : ${computerScore}`;
}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(round())
//     }
//     if (score > 0) {
//         console.log("YOU WIN!")
//     }
//     if (score < 0) {
//         console.log("YOU LOSE!")
//     }
//     if (score == 0) {
//         console.log("IT'S A TIE!")
//     }
// 

rockBtn.addEventListener('click', () => round('Rock'));
paperBtn.addEventListener('click', () => round('Paper'));
scissorsBtn.addEventListener('click', () => round('Scissors'));