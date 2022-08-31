let playerChoice = "initial";
let computerChoice;
let result;
const buttonsArea = document.querySelector("#buttons")
const choiceDisplay = document.querySelector("#displayPlayerChoice")
const playButton = document.querySelector("#playGame");
const choices = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    button = document.createElement("button");
    button.innerHTML = choice;
    button.addEventListener('click', () => {
        playerChoice = choice;
        document.getElementById("displayPlayerChoice").innerHTML = "You selected " + playerChoice;

    });
    buttonsArea.appendChild(button)
})


function getComputerChoice() {
    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

playButton.addEventListener('click', () => {
    document.getElementById('displayResults').innerHTML = "You chose " + playerChoice + " and the Computer chose " + getComputerChoice(); 

})