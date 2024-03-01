let playerScore = 0
let computerScore = 0

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


