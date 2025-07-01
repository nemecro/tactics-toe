"use strict"

/**
 * @param {Array} board - 2D array
 * @returns {number} -1 for victory not met, 0 for draw
 * @returns {string} symbol of the winner
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
        board[0][0] === board[1][1] && board[1][1] === board[2][2] ||
        board[2][0] === board[1][1] && board[1][1] === board[0][2]
    ){
        return board[1][1];
    }

    // not yet
    if (board.some(row => row.includes(0))){
        return -1;
    }

    // draw
    if (board.every(row => !row.includes(0))){
        return 0;
    }
}

const gameboard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

const player1 = {
    name: 'Roland',
    symbol: 'X',
};

const player2 = {
    name: 'Olga',
    symbol: 'O',
};

