const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
let result = document.querySelector('.result');

const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() { 
    let computerSelection = Math.floor(Math.random() * choices.length);
    return (choices[computerSelection]);
}

let computerChoice;
let score = 0;

function round(playerChoice) {
    let computerChoice = getComputerChoice();
    console.log("Player choice: ", playerChoice)
    console.log("Computer choice: ", computerChoice)
    if (playerChoice.toLowerCase() == "rock") {
        if (computerChoice == "Scissors") {
            result.textContent = "Rock crushes scissors. You win!";
            return score++;
        }
        else if (computerChoice == "Paper") {
            result.textContent = "Paper covers rock. You lose!";
            return score--;
        }
        else result.textContent = "Tie!";
            return score;
    }
    if (playerChoice.toLowerCase() == "paper") {
        if (computerChoice == "Rock") {
            result.textContent = "Paper covers rock. You win!";
            return score++;
        }
        else if (computerChoice == "Scissors") {
            result.textContent = "Scissors cut paper. You lose!";
            return score--;
        }
        else result.textContent = "Tie!";
            return score;
    }
    if (playerChoice.toLowerCase() == "scissors") {
        if (computerChoice == "Rock") {
            result.textContent = "Rock crushes scissors. You lose!";
            return score--;
        }
        else if (computerChoice == "Paper") {
            result.textContent = "Scissors cut paper. You win!";
            return score++;
        }
        else result.textContent = "Tie!";
            return score;
    }
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