// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get all the squares and the status element
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    //const newGameBtn = document.querySelector(".btn");
  
    let currentPlayer = "X"; // Start with X
    //let gameActive = true;   // Game is active by default
    let gameState = Array(9).fill(""); // Track the state of the game
  
    // Winning combinations
    //const winningCombinations = [
    //  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
     // [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
     // [0, 4, 8], [2, 4, 6]              // Diagonals
    //];
  
    // Add the 'square' class to each square
    squares.forEach((square, index) => {
      square.classList.add("square");
  
      // Add click event to handle marking X or O
      square.addEventListener("click", () => handleSquareClick(square, index));
      
      //Hover effect when mouse enters and leaves
      square.addEventListener("mouseenter", () => handleMouseEnter (square, index));
  
      square.addEventListener("mouseleave", () => handleMouseLeave(square));
      
    }); 

    // Handle mouse entering a square (hover effect)
    function handleMouseEnter(square, index) {
        if (gameState[index] === "") { // Only apply hover effect to empty squares
            square.classList.add("hover");
        }
    }

    // Handle mouse leaving a square (remove hover effect)
    function handleMouseLeave(square) {
        square.classList.remove("hover");
    }
  
    // Handle click on a square
    function handleSquareClick(square, index) {
    // Check if the square is already clicked or game over
      if (gameState[index] !== "") {
        return; // Ignore if marked
      }
  
      // Update the state
      gameState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
  
      /* Check if there's a winner
      if (checkWinner()) {
        status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
        status.classList.add("you-won");
        gameActive = false;
        return;
      }
  
      // Check if the game is a draw
      if (!gameState.includes("")) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
      } */
  
      // Switch the player
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `It's ${currentPlayer}'s turn!`;
    }
});
  
    /* Check for a winner
    function checkWinner() {
      return winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === currentPlayer);
      });
    }
  
    // Reset the game when the 'New Game' button is clicked
    newGameBtn.addEventListener("click", () => {
      gameState.fill("");
      gameActive = true;
      currentPlayer = "X";
      status.textContent = "Move your mouse over a square and click to play an X or an O.";
      status.classList.remove("you-won");
  
      squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("X", "O");
      });
    });
  }); */