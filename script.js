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
        console.log(`You Win! ${usr} beats ${com}`);
        return 'usr'; 
    } else {
        console.log(`You Lose! ${com} beats ${usr}`);
        return 'com'; 
    }
}

function game() {
    let usrScore = 0;
    let comScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(computerSelection(), userSelection());
        if (round === 'usr') {
            usrScore++;
        } else if (round === 'com') {
            comScore++;
        }
    }

    if (usrScore > comScore) {
        console.log("You Won!!!");
    } else if (usrScore < comScore) {
        console.log("Oh No! You Lost.");
    } else {
        console.log("It's a Draw!");
    }
}

game();