function getComputerChoice() {
    const options = ["Paper", "Rock", "Scissor"]
    const optioSelect = options[Math.floor(Math.random() * options.length)]
    return optioSelect
}

function startGame(player, computer) {
    const playerChoise = player.toLowerCase()
    if (playerChoise === 'paper' && computer === 'Scissor') {
        console.log(`You Lose! ${computer} beats ${player}`)
    } else if (playerChoise === 'paper' && computer === 'Rock') {
        console.log(`You Won! ${player}  beats ${computer}`)
    } else if (playerChoise === 'rock' && computer === 'Paper') {
        console.log(`You Lose! ${computer} beats ${player}`)
    } else if (playerChoise === 'rock' && computer === 'Scissor') {
        console.log(`You Won! ${player}  beats ${computer}`)
    } else if (playerChoise === 'scissor' && computer === 'Rock') {
        console.log(`You Lose! ${computer} beats ${player}`)
    } else if (playerChoise === 'scissor' && computer === 'Paper') {
        console.log(`You Won! ${player}  beats ${computer}`)
    } else if (playerChoise === 'rock' && computer === 'Rock') {
        console.log(`You Draft!`)
    } else if (playerChoise === 'paper' && computer === 'Paper') {
        console.log(`You Draft!`)
    } else if (playerChoise === 'scissor' && computer === 'Scissor') {
        console.log(`You Draft!`)
    }else {
        console.log(`Option no valida`)

    }
}

function playRound () {
    console.log("click")
/*     let game = prompt("Choose Paper, Scissor or Rock, if you want to stop press cancel")
    while(game !== null){
        startGame(game, getComputerChoice());
        game = prompt("Choose Paper, Scissor or Rock, if you want to stop press cancel")
    } */
}
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', playRound)
})