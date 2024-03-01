

window.onload = (event) => {
    let userName = prompt('What is your name?')

    if(userName === null) {
        document.getElementById('response-text').innerText = "Yo enter a name yo are not sneaky"
        document.getElementById('response-text').classList = "Display text-bold h3"
    }

    if(!userName.trim()) {
        alert('please enter a name brother')
        userName = prompt('Enter your name')
    }
document.getElementById('response-text').innerText = `${userName}`

}
const victory = ["you won"];
const loss = ['you lost'];
const tie = ["you tied"];

// Variables that should work hopefully please
const playerScoreElement = document.querySelector('.winnings-history-element');
const computerScoreElement = document.querySelector('.losses-history-element');
const outcomeElement = document.querySelector('.game-status-element');
const roundsplayedElement = document.querySelector('.ties-history-element');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to play game
function playRound(playerChoice) {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * 3)];



    // Update images || This uses .querySelector
  document.querySelector(".result-container .user-result-element i").classList = `fa-regular fa-hand-${playerChoice}`;
  document.querySelector(".result-container .computer-result-element i").classList = `fa-regular fa-hand-${computerChoice}`;


// Determine winner
if (playerChoice === computerChoice) {
    outcomeElement.textContent = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    outcomeElement.textContent = 'You win!';
    playerScore++; 
  } else {
    outcomeElement.textContent = 'You lose!';
    computerScore++;
  }
  roundsPlayed++;


 // Update scores and rounds played
 playerScoreElement.textContent = playerScore;
 computerScoreElement.textContent = computerScore;
 roundsplayedElement.textContent = roundsPlayed;
 
 // Reload the page if round 5 is reached
 if (roundsPlayed === 5) {
   location.reload();
 }
}
 
// Reload the page
document.querySelector(".reset-btn").addEventListener("click", function() {
    location.reload();
  });







