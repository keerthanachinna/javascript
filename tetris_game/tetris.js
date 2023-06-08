// Get the canvas element and its context
const canvas = document.getElementById('tetrisCanvas');
const context = canvas.getContext('2d');

// Define the size of each block in the Tetris grid
const blockSize = 20;

// Define the Tetris grid dimensions
const gridWidth = canvas.width / blockSize;
const gridHeight = canvas.height / blockSize;

// Initialize the game state
let gameGrid = createGrid();

// Function to create an empty game grid
function createGrid() {
  const grid = [];
  for (let row = 0; row < gridHeight; row++) {
    grid.push(new Array(gridWidth).fill(0));
  }
  return grid;
}

// Function to draw the game grid
function drawGrid() {
  for (let row = 0; row < gridHeight; row++) {
    for (let col = 0; col < gridWidth; col++) {
      drawBlock(col, row, gameGrid[row][col]);
    }
  }
}

// Function to draw a single block
function drawBlock(x, y, color) {
    // debugger
  context.fillStyle = color;
  context.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  context.strokeStyle = '#000';
  context.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
//   update();
}

// Function to update the game state
function update() {
  // Game update logic goes here
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   requestAnimationFrame(update);
}

// Function to render the game
function render() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the game grid
  drawGrid();
  
  // Additional rendering logic goes here
  
  // Call the render function again
  requestAnimationFrame(render);
}

// Function to start the game
function startGame() {
  // Game initialization logic goes here
  
  // Start the game loop
  render();
  
}

// Function to pause the game
function pauseGame() {
  // Pause the game logic goes here
}

// Function to reset the game
function resetGame() {
  // Game reset logic goes here
}

