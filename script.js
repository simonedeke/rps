function playRound(userSelect, compSelect) {
    console.log(userSelect);
    console.log(compSelect);
    let winsBox = document.getElementById('Wins');
    let lossBox = document.getElementById('Losses');
    let recentBox = document.getElementById('MostRecent');
    let wins = winsBox.innerText.charAt(winsBox.innerText.length-1);
    let losses = lossBox.innerText.charAt(lossBox.innerText.length-1);
    console.log('wins: ' + wins);
    console.log('losses: ' + losses);
    if(userSelect == compSelect) {
        return "You have both chosen: " + userSelect;
    }
    switch (userSelect) {
        case "Rock":
            if(compSelect == 'Paper') {
                lossBox.innerText = 'Losses: ' + (parseInt(losses) + 1);
                recentBox.innerText ='Paper covers Rock, you lose';
                return 'Paper covers Rock, you lose';
            }
            else {
                winsBox.innerText = 'Wins: ' + (parseInt(wins) + 1);
                recentBox.innerText = "Rock crushses Scissors, you win";
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
