let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let roundsplayedElement = document.getElementById('roundsPlayed');

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        // If it's a tie, simply return
        result = "TIE!";
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? " WIN!" : " LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? " WIN!" : " LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? " WIN!" : " LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");
    
    switch(result){
        case " WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case " LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case " TIE!":
            resultDisplay.classList.add("yellowText");
            break;
    }

    roundsPlayed++;
    roundsplayedElement.textContent = `Round ${roundsPlayed}`;

    if (roundsPlayed === totalRounds || playerScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    let endMessage = 'GAME END!';
    if (playerScore > computerScore) {
        endMessage = " You won!!";
    } else if (playerScore < computerScore) {
        endMessage = ' You Lose!';
    } else {
        endMessage = "It's a tie game!";
    }

    roundsplayedElement.textContent = `Total Rounds Played: ${roundsPlayed}`;
    resultDisplay.textContent = endMessage;
    resultDisplay.classList.add("yellowText");
}

let Username = prompt('Enter a Username:');
let story = `${Username}`;
let madLibOutputDiv = document.getElementById('madLibOutput');
madLibOutputDiv.innerHTML = `<p>${story}</p>`;