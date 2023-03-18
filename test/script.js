const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleSquareClick(e) {
  const square = e.target;
  if (square.innerHTML !== '') {
    return;
  }
  square.innerHTML = currentPlayer;
  if (checkWin()) {
    alert(currentPlayer + ' wins!');
    reset();
    return;
  }
  if (checkTie()) {
    alert('It\'s a tie!');
    reset();
    return;
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningCombos.some(combo => {
    return combo.every(square => {
      return squares[square].innerHTML === currentPlayer;
    });
  });
}

function checkTie() {
  return [...squares].every(square => {
    return square.innerHTML !== '';
  });
}

function reset() {
  squares.forEach(square => {
    square.innerHTML = '';
  });
  currentPlayer = 'X';
}

squares.forEach(square => {
  square.addEventListener('click', handleSquareClick);
});
