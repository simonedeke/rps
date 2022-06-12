function playRound(userSelect, compSelect) {
    console.log(userSelect);
    console.log(compSelect);
    let winsBox = document.getElementById('Wins');
    let lossBox = document.getElementById('Losses');
    
    if(userSelect == compSelect) {
        return "You have both chosen: " + userSelect;
    }
    switch (userSelect) {
        case "Rock":
            if(compSelect == 'Paper') {
                document.getElementById('Losses').innerText = 
                parseInt(document.getElementById('Losses').innerText) + 1
                document.getElementById('MostRecent').innerText ='Paper covers Rock, you lose';
                return 'Paper covers Rock, you lose';
            }
            else {
                document.getElementById('Wins').innerText = 
                parseInt(document.getElementById('Wins').innerText) + 1
                document.getElementById('MostRecent').innerText = "Rock crushses Scissors, you win";
                return "Rock crushses Scissors, you win";
            }
        case "Paper":
            return (compSelect == 'Rock') ? 'Paper covers Rock, you win' : 'Scissors cuts paper, you lose';
        case "Scissors":
            return (compSelect == 'Paper') ? 'Scissors cuts Paper, you win' : 'Rock smashes Scissors, you lose';
        }
}

function computerSelection() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 1) return "Rock";
    else if (randNum == 2) return "Paper";
    else return "Scissors";
}

function buttonClicked(e) {
    const bttn = e.target;
    console.log(playRound(bttn.id, computerSelection()));
}

window.addEventListener('click', buttonClicked);
