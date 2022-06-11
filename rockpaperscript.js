console.log("script working");

let rpsArray = ["rock", "paper", "scissors"];
let playerChoice = "Rock";

function playerSelection() {
    return window.prompt("Choose Rock, Paper, or Scissors!")
}

function computerPlay() {
    return rpsArray[Math.floor(Math.random()*3)]
}

function playRound(playChoice, compChoice) {
    console.log("Play Round");

    playChoice = playChoice.toLowerCase();
    compChoice = compChoice.toLowerCase();

    console.log('player chooses ' + playChoice);
    console.log('computer chooses ' + compChoice);
    console.log(rpsArray.indexOf(playChoice))

    if(rpsArray.indexOf(playChoice) == -1) {
        return "I do not accept that, come again";
    }

    if(playChoice == compChoice) {
        return "You have chosen the same option, it's a tie!";
    }

    switch(playChoice) {
        case 'rock':
        return (compChoice == 'paper') ? "Paper covers rock, you lose" : "Rock crushes scissors into oblivion, you win, this time"
        /*
            if (compChoice == 'paper') {
                return "Paper covers rock, you lose";
            }
            else {
                return "Rock crushes scissors into oblivion, you win, this time"
            }
            */
        case 'paper':
            return (compChoice == 'scissors') ? "Paper is shredded by scissors, you lose" : "Paper smothers Rock, you win, today"
        case 'scissors':
            return (compChoice == 'paper') ? "Scissors have gone bananas on paper, you win" : "Do you smell what the rock is cookin, you! lose!"
    }    
}

function game() {
    for (i = 0; i < 5; i++)
    {
        console.log(playRound(playerSelection(), computerPlay()));
    }
}
game();
