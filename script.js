function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function userSelection() {
    let choice = prompt("Rock, Paper or Scissors");
    return choice.toLowerCase();
}

function playRound(com, usr) {
    if (usr === com) {
        return console.log("It's a tie!");
    } else if (usr === "rock" && com === "scissors" || usr === "paper" && com === "rock" || usr === "scissors" && com === "paper") {
        return console.log(`You Win! ${usr} beats ${com}`); 
    } else {
        return console.log(`You Lose! ${com} beats ${usr}`);
    }
}

playRound(computerSelection(), userSelection());