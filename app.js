let cPlayer = 0;
let cComputer = 0;
function getComputerChoice() {
    const options = ["Paper", "Rock", "Scissor"]
    const optioSelect = options[Math.floor(Math.random() * options.length)]
    return optioSelect
}
function showScores (cComputer,cPlayer ) {
    scores = document.querySelector('#scores');
    
    while(scores.firstChild) {
        scores.removeChild(scores.firstChild)
    } 

    const computer = document.createElement('p');
    const player = document.createElement('p');
    computer.textContent ="Computer: " + cComputer;
    player.textContent = "Player: " +cPlayer;
    scores.append(computer, player)

}
function startGame(player, computer) {
    const playerChoise = player.toLowerCase()
    const show = document.querySelector('#show');


    if (playerChoise === 'paper' && computer === 'Scissor') {
       show.textContent = `You Lose! ${computer} beats ${player}`;
       cComputer++;
    } else if (playerChoise === 'paper' && computer === 'Rock') {
       show.textContent = `You Won! ${player}  beats ${computer}`;
       cPlayer++;
    } else if (playerChoise === 'rock' && computer === 'Paper') {
       show.textContent = `You Lose! ${computer} beats ${player}`;
       cComputer++;

    } else if (playerChoise === 'rock' && computer === 'Scissor') {
       show.textContent = `You Won! ${player}  beats ${computer}`;
       cPlayer++
    } else if (playerChoise === 'scissor' && computer === 'Rock') {
       show.textContent = `You Lose! ${computer} beats ${player}`;
       cComputer++;

    } else if (playerChoise === 'scissor' && computer === 'Paper') {
       show.textContent = `You Won! ${player}  beats ${computer}`;
       cPlayer++;
    } else if (playerChoise === 'rock' && computer === 'Rock') {
       show.textContent = `You Draft!`
    } else if (playerChoise === 'paper' && computer === 'Paper') {
       show.textContent = `You Draft!`
    } else if (playerChoise === 'scissor' && computer === 'Scissor') {
       show.textContent = `You Draft!`
    }else {
       show.textContent = `Option no valida`
    }
    showScores(cComputer,cPlayer)
    if(cComputer == 5) {
        show.innerHTML+="<br>The Machine has Won! We will conquer the World!"
    }else if(cPlayer == 5) {
        show.innerHTML+= "<br>Your Won!. You has stopped the conquer of the World"

    }

}
showScores(cComputer,cPlayer)
function playRound (value) {
    startGame(value, getComputerChoice());

 
}
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', e => playRound(e.target.value))
})