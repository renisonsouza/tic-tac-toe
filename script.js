const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameEnded = false;
let movesCount = 0;

function handleCellClick() {
  if (gameEnded) return;

  if (this.textContent === '') {
    this.textContent = currentPlayer;
    movesCount++;
    checkWin();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      alert('Jogador ' + currentPlayer + ' venceu!');
      gameEnded = true;
      break;
    }
  }

  if (movesCount === cells.length && !gameEnded) {
    alert('Deu Velha!');
    gameEnded = true;
  }
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });

  currentPlayer = 'X';
  gameEnded = false;
  movesCount = 0;
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
