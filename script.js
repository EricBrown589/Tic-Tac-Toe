/*
click on tile = X 
switch to O
click on next tile = O
switch back to X
cant click same tile twice

display message
    display current players turn
        if someone won
            display Player "" won
        else no one won
            display Draw

click restart
    clears and resets board without refreshing the page
*/

const gameSpace = document.querySelector(".gamespace")
const gameTiles = Array.from(document.querySelectorAll(".tiles"))
const status = document.querySelector("#status")
const restart = document.querySelector("#restart")
const start = document.querySelector("#start")
document.getElementById("one").classList.add("currentPlayer")

let gameBoard = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let gameStarted = false

const x_won = "Player One Won!"
const o_won = "Player Two Won!"
const draw = "It's a draw!"

start.addEventListener("click", function(event){
    event.preventDefault
    return gameStarted = true
})

const isValid = function(tiles) {
    if (tiles.innerText === "X" || tiles.innerText === "O"){
        return false;
    } else {
        return true
    }
}

const boardUpdate = function(index) {
    gameBoard[index] = currentPlayer
}

const changePlayer = function() {
    if(currentPlayer === "X"){
        document.getElementById("one").classList.remove("currentPlayer")
        document.getElementById("two").classList.add("currentPlayer")
        return currentPlayer = "O"
    } else {
        document.getElementById("two").classList.remove("currentPlayer")
        document.getElementById("one").classList.add("currentPlayer")
        return currentPlayer = "X"
    }
}

const tileClick = function(tiles, index) {
    if(isValid(tiles) && gameStarted === true) {
        tiles.innerText = currentPlayer
        boardUpdate(index)
        changePlayer()
    }
}

gameTiles.forEach(function(tiles, index){
    tiles.addEventListener("click", function(){
        tileClick(tiles, index)
    })
})

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function winCheck() {
    
}

restart.addEventListener("click", function(event){
    event.preventDefault
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    if (currentPlayer === "O") {
        changePlayer()
    }
    gameTiles.forEach(function(tiles){
        tiles.innerText = " "
    })
    gameStarted = false
})