import React, {useState,useEffect} from 'react';

const Square = () =>  {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [count, setCount] = useState(0);
    let player = count % 2 === 0 ? 'O' : 'X';

    useEffect(() => { isWin(); setCount((prev) => prev + 1);}, [squares]);

    const winnerLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return (
        <div className="tic-tac-toe">
            {squares.map((item, idx) => (
                <div className="grid" key={`${idx}`} data-index={`${idx}`} onClick={handleClick}>{item}</div>
            ))}
        </div>
    );

    // FUNCTIONS:

    function handleClick(e) {
        let data = e.target.getAttribute('data-index');
        let currentSquares = [...squares];
        if (currentSquares[data] === null) {
            currentSquares[data] = player;
            setSquares(currentSquares);
        } else {
            alert('Эта клетка занята! Выбери свободную')
        }
    }

    function isWin() {
        for (let i = 0; i < 8; i++ ) {
            let line = winnerLine[i];
            if (squares[line[0]] === player && squares[line[1]] === player && squares[line[2]] === player) {
                alert(`${player} победитель!`);
                setTimeout(() => {
                    setSquares(Array(9).fill(null));
                    setCount(0);
                }, 1000)
            }
        }
    }
};

export default Square;
