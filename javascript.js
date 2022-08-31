const choices = ['rock', 'paper', 'scissors'];

const createButtons = document.getElementById("buttons");

for (var choice in choices) {
    var button = document.createElement("BUTTON");
    button.innerHTML = choices[choice];
    createButtons.appendChild(button);

}

