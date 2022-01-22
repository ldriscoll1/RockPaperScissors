let guess = '';
let playerScore = 0;
let cpuScore = 0;
const score = document.querySelector("#score");
const outcome = document.querySelector("#outcome");
const btns = document.querySelectorAll(".btn");
const winAudio = document.querySelector("#winSound");
const loseAudio = document.querySelector("#loseSound");
const tieAudio = document.querySelector("#tieSound");
//Add a event listener to every button
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        //Check what button is pressed
        if(styles.contains('rock'))
        {
            guess = 'Rock';
        }
        else if(styles.contains('scissors'))
        {
            guess = 'Scissors';
        }
        else if(styles.contains('paper'))
        {
            guess = 'Paper';
        }
        //Randomly choose the opposing rock/paper/scissors
        let randomChoice = Math.floor(Math.random()*3);
        //Parse the int into a guess
        if(randomChoice == 0)
        {
            cpuGuess = 'Rock';
        }
        else if(randomChoice == 1)
        {
            cpuGuess = 'Scissors';
        }
        else if(randomChoice == 2)
        {
            cpuGuess = 'Paper';
        }
        //Find out the winner of the duel
        let outcomeText = '';
        if(guess == 'Rock')
        {
            if(cpuGuess == 'Rock')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Tied';
                computeWinner('tie');
            }
            else if(cpuGuess == 'Paper')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Lost';
                computeWinner('cpu');
            }
            else if(cpuGuess == 'Scissors')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Won';
                computeWinner('player');
            }
        }
        if(guess == 'Paper')
        {
            if(cpuGuess == 'Rock')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Won';
                computeWinner('player');
            }
            else if(cpuGuess == 'Paper')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Tied';
                computeWinner('tie');
            }
            else if(cpuGuess == 'Scissors')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Lost';
                computeWinner('cpu');
            }
        }
        if(guess == 'Scissors')
        {
            if(cpuGuess == 'Rock')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Lost';
                computeWinner('cpu');
            }
            else if(cpuGuess == 'Paper')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Won';
                computeWinner('player');
            }
            else if(cpuGuess == 'Scissors')
            {
                outcomeText = 'CPU Chose '+ cpuGuess + ' you Tied';
                computeWinner('tie');
            }
        }
        score.textContent = playerScore + ":" + cpuScore;
        outcome.textContent = outcomeText;
    });
});
function computeWinner(winner)
{
    if(winner == 'player')
    {
        playerScore++;
        winAudio.play();
    }
    else if(winner == 'cpu')
    {
        cpuScore++;
        loseAudio.play();
    }
    else if(winner == 'tie')
    {
        tieAudio.play();
    }
}