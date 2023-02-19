function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(com, usr) {
    if (usr === com) {
        return board.textContent = "It's a tie!";
    } else if (usr === "rock" && com === "scissors" || usr === "paper" && com === "rock" || usr === "scissors" && com === "paper") {
        board.textContent = `You Win! ${usr} beats ${com}.`;
        return usrScore++; 
    } else {
        board.textContent = `You lose! ${com} beats ${usr}.`;
        return comScore++; 
    }
}

function check() {
    if (usrScore === 5) {
        board.textContent = "YAYA! You Won.";
        usrScore = 0;
        comScore = 0;
    } else if (comScore === 5) {
        board.textContent = "Oh NO! You Lost.";
        usrScore = 0;
        comScore = 0;
    }
}

function updateScore() {
    const updateUsr = document.querySelector('.user-score');
    const updateCom = document.querySelector('.com-score');
    updateUsr.textContent = usrScore;
    updateCom.textContent = comScore;
}

let usrScore = 0;
let comScore = 0;
const board = document.querySelector('.board');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(computerSelection(), button.getAttribute('id'));
        updateScore();
        check();
    });
});

