const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("user-choice-img");
const computerDisplay = document.getElementById("computer-choice-img");
const resultDisplay = document.querySelector(".game-status-element");
const playerScoreDisplay = document.querySelector(".winnings-history-element");
const computerScoreDisplay = document.querySelector(".losses-history-element");
const resetBtn = document.querySelector(".reset-btn");
let playerScore = 0;
let computerScore = 0;

// Event listener for player moves
document.querySelectorAll(".move").forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.dataset.userMove);
    });
});

// Event listener for reset button
resetBtn.addEventListener("click", resetGame);

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    playerDisplay.src = `${playerChoice}.png`;
    computerDisplay.src = `${computerChoice}.png`;
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "Let's Play!";
}