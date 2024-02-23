window.onload = (event) => {
    let userName = prompt('What is your name?')

    if(userName === null) {
        document.getElementById('response-text').innerText = "Yo enter a name yo are not sneaky"
        document.getElementById('response-text').classList = "Display text-bold h3"
    }

    if(!userName.trim()) {
        alert('please enter a name brother')
        userName = prompt('Eneter your name')
    }
document.getElementById('response-text').innerText = `${userName}`

}

let message = `Yo good job ${userName}, you won!`

