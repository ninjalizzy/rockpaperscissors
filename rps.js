const choices = ["Rock", "Paper", "Scissors"]

        function getComputerChoice() { 
            let computerSelection = Math.floor(Math.random() * choices.length);
            return (choices[computerSelection]);
        }

        let score = 0;

        function round() {
            let playerChoice = prompt("Choose your weapon!");
            let computerChoice = getComputerChoice();
            console.log("Player choice: ", playerChoice)
            console.log("Computer choice: ", computerChoice)
            if (playerChoice.toLowerCase() == "rock") {
                if (computerChoice == "Scissors") {
                    console.log("Rock crushes scissors. You win!")
                    return score++;
                }
                else if (computerChoice == "Paper") {
                    console.log("Paper covers rock. You lose!")
                    return score--;
                }
                else console.log ("Tie!")
                    return score;
            }
            if (playerChoice.toLowerCase() == "paper") {
                if (computerChoice == "Rock") {
                    console.log ("Paper covers rock. You win!")
                    return score++;
                }
                else if (computerChoice == "Scissors") {
                    console.log ("Scissors cut paper. You lose!")
                    return score--;
                }
                else console.log ("Tie!")
                    return score;
            }
            if (playerChoice.toLowerCase() == "scissors") {
                if (computerChoice == "Rock") {
                    console.log ("Rock crushes scissors. You lose!")
                    return score--;
                }
                else if (computerChoice == "Paper") {
                    console.log ("Scissors cut paper. You win!")
                    return score++;
                }
                else console.log ("Tie!")
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
        // }