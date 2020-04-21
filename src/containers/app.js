import React, {useState,useEffect} from 'react';
import Board from '../components/board';
import checkWinner from './../utils/check-winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(true);
  const [status, setStatus] = useState();
  const [isEndGame, setIsEndGame] = useState(false);

  useEffect(
    () => {
      const winner = checkWinner(squares,isXnext);
      if (winner === 'none') {
        setStatus('Ничья');
        setIsEndGame(true);
      } else if (winner) {
        setStatus(`Выиграл: "${winner}"`);
        setIsEndGame(true);
      } else {
        const player = isXnext ? 'X' : 'O'
        setStatus(`Следующий: "${player}"`);
      }
    }, [squares,isXnext]
  )

  return (
    <div className="app">
      <h1>{status}</h1>
      <Board 
        squares={squares} 
        isXnext={isXnext}
        isEndGame={isEndGame}
        onChangeSquares={squares => setSquares(squares)}
        onChangeNext={next => setIsXnext(next)}
      />
      {isEndGame && (<div className='reset'>
        <button onClick={() => resetGame()}>Начать заново?</button>
      </div>)}
    </div>
  );

  function resetGame() {
    setIsEndGame(false);
    setSquares(Array(9).fill(null));
    setIsXnext(true);
  }
}

export default App;