"use strict"

/**
 * @param {Array} board - 2D array
 * @returns {string|number} Winner's symbol, 0 for draw, -1 for ongoing game
 */
function checkVictory(board) {
    for (let i = 0; i < board.length; i++){
        // row
        if (
            board[i][0] !== 0 &&
            board[i][0] === board[i][1] && board[i][1] === board[i][2]
        ){
            return board[i][0];
        }
        // col
        if (
            board[0][i] !== 0 &&
            board[0][i] === board[1][i] && board[1][i] === board[2][i]
        ){
            return board[0][i];
        }
    }

    // diagonal
    if (
        board[1][1] !== 0 && 
        (
            board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
            board[2][0] === board[1][1] && board[1][1] === board[0][2]
        )
    ){
        return board[1][1];
    }

    // not yet
    if (board.some(row => row.includes(0))){
        return -1;
    }

    // draw
    return 0;
}

// const gameboard = [
    // [0,0,0],
    // [0,0,0],
    // [0,0,0]
// ];

const gameboard = function(){
    let board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    const getState = function(){
        return board.map(row => row.slice());
    }

    const setField = function(row, col, symbol){
        board[row][col] = symbol;
    }

    const reset = function(){
        board = board.map(row => Array(row.length).fill(0));
    }

    return {
        getState, setField, reset
    }

}();

const createPlayer = function(name, symbol){
    return {
        name,
        symbol,
    }
}

const player1 = createPlayer('Roland', 'X');
const player2 = createPlayer('Olga', '0');

function playGame(){
    let gameStatus = -1;
    let activePlayer = player1;
    let row = 0;
    let column = 0;
    
 
    while(gameStatus === -1){
        activePlayer = activePlayer === player1 ? player2 : player1;
        alert(`${activePlayer.name}'s turn`);

        do {
            row = prompt('Row: ');
            column = prompt('Column: ');
        } while (gameboard[row] == undefined || gameboard[row][column] == undefined || gameboard[row][column] !== 0)

        gameboard[row][column] = activePlayer.symbol;

        console.table(gameboard);
        gameStatus = checkVictory(gameboard);

        if(gameStatus === activePlayer.symbol){
            alert(`${activePlayer.name} is victorious`);
        }

        if (gameStatus === 0){
            alert('draw');
        }
    }
}

// I need a factory function to create Players
// I need a gameboard IIFE
// I need a game factory function