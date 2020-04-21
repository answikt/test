export default function checkWinner(squares, isXnext) {
  const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];
  const player = isXnext ? 'O' : 'X'; 
  for (let i = 0; i < winnerLines.length; i++) {
      let line = winnerLines[i];
      if (squares[line[0]] === player && squares[line[1]] === player && squares[line[2]] === player) {
          return player;
      }
  }
  if (squares.every((item) => item !== null)) {
    return 'none';
  }
  return null;
}