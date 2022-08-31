var playerChoice;
var computerChoice;
let result;
const buttonsArea = document.querySelector("#buttons")
const choiceDisplay = document.querySelector("#displayPlayerChoice")
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let ComputerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log("the Computer chose " + ComputerChoice)
}

choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerHTML = choice;
    button.addEventListener('click', () => {
        let playerChoice = choice;
        console.log("you selected " + playerChoice);
        document.getElementById("displayPlayerChoice").innerHTML = "You selected "+ playerChoice;
        
    });
    buttonsArea.appendChild(button)
})

getComputerChoice ()


function playGame(playerChoice, computerChoice) {
    let result = playerChoice + computerChoice
    console.log(result)
}