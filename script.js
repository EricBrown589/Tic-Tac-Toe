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
const gameTiles = document.querySelectorAll(".tiles")
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

start.addEventListener("click", function(event) {
    event.preventDefault
    return gameStarted = true
}) //start button

const isValid = function(tiles) {
    if (tiles.innerText === "X" || tiles.innerText === "O"){
        return false;
    } else {
        return true
    }
} //checks to see if the tile is empty or not

const boardUpdate = function(index) {
    gameBoard[index] = currentPlayer
} //updates the board with current player letter

const changePlayer = function() {
    if(currentPlayer === "X") {
        document.getElementById("one").classList.remove("currentPlayer")
        document.getElementById("two").classList.add("currentPlayer")
        return currentPlayer = "O"
    } else {
        document.getElementById("two").classList.remove("currentPlayer")
        document.getElementById("one").classList.add("currentPlayer")
        return currentPlayer = "X"
    }
} //changes player from x to o back to x

function winCheck() {
    if(gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    } 
    if(gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if(gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if(gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if(gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if(gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if(gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if(gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
        document.getElementById("status").innerText = x_won
        return gameStarted = false
    } else if(gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
        document.getElementById("status").innerText = o_won
        return gameStarted = false
    }
    if (!gameBoard.includes("")) {
        document.getElementById("status").innerText = draw
    }
} //checks to see if theres a win condition, if there is it will change the status tag in the html to have a text of the winner or if there is a draw 


const tileClick = function(tiles, index) {
    if(isValid(tiles) && gameStarted === true) {
        tiles.innerText = currentPlayer
        boardUpdate(index)
        winCheck()
        changePlayer()
    }
} //says what will happen when a tile is click

gameTiles.forEach(function(tiles, index) {
    tiles.addEventListener("click", function() {
        tileClick(tiles, index)
    })
}) //adds the functionality to click the tiles and runs the tile click checks


restart.addEventListener("click", function(event) {
    event.preventDefault
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    if (currentPlayer === "O") {
        changePlayer()
    }
    gameTiles.forEach(function(tiles) {
        tiles.innerText = ""
    })
    gameStarted = false
    document.getElementById("status").innerText = ""
}) //restarts the game without having to refresh the page