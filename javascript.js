let playerChoice;
let computerChoice;
let result;

const choices = ['rock', 'paper', 'scissors'];
const buttonsArea = document.querySelector("#buttons");
const playButton = document.querySelector("#playGame");

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
    if (playerChoice === undefined) {
        document.getElementById('displaySelections').innerHTML = "Please make a selection";
    } else {
        document.getElementById('displaySelections').innerHTML = "You chose " + playerChoice + " and the Computer chose " + getComputerChoice();
        result = playerChoice + computerChoice;
    }

    switch (result) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            document.getElementById("gameResult").innerHTML = "You won!!!!!!!!!"
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            document.getElementById("gameResult").innerHTML = "You lost :(((((((("
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            document.getElementById("gameResult").innerHTML = "You tied"
            break;



    }

})
