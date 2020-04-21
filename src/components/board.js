import React from 'react';

const Board = ({squares, isXnext, isEndGame, onChangeSquares}) => {
    return (
        <div className={isEndGame ? 'board board--blocked' : 'board'}>
            {squares.map((item, idx) => (
                <div className={item ? 'square square--blocked' : 'square'} key={`${idx}`} onClick={() => handleClick(idx)}>{item}</div>
            ))}
        </div>
    );

    function handleClick(idx) {
        if (!isEndGame && squares[idx] === null) {
            let currentSquares = [...squares];
            currentSquares[idx] = isXnext ? 'X' : 'O';
            onChangeSquares(currentSquares);
        }
    };
};

export default Board;

