// script.js
let currentPlayer = "X"; // X starts the game
let board = ["", "", "", "", "", "", "", "", ""]; // Represents the game board
let gameActive = true; // Flag to track if the game is active

function makeMove(cellIndex) {
    // Check if the cell is empty and the game is active
    if (board[cellIndex] === "" && gameActive) {
        board[cellIndex] = currentPlayer; // Update the board
        document.getElementById("board").children[cellIndex].textContent = currentPlayer; // Update the cell display
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
        checkWin(); // Check for a win
    }
}

function checkWin() {
    // Array of winning combinations
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Display the winner and end the game
            document.getElementById("message").textContent = `${board[a]} wins!`;
            gameActive = false;
        }
    }

    if (!board.includes("") && gameActive) {
        // Display a draw message if there are no empty cells and the game is still active
        document.getElementById("message").textContent = "It's a draw!";
        gameActive = false;
    }
}

function resetBoard() {
    currentPlayer = "X"; // Reset the current player to X
    board = ["", "", "", "", "", "", "", "", ""]; // Clear the board
    gameActive = true; // Set the game to active
    document.getElementById("message").textContent = ""; // Clear the message
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.textContent = ""; // Clear the cell display
    }
}

resetBoard(); // Initialize the game board
