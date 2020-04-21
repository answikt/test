import React from 'react';
import Square from './square';

const Board = ({squares, isXnext, isEndGame, onChangeSquares, onChangeNext}) => {
    return (
        <div className={isEndGame ? 'board board--blocked' : 'board'}>
            {squares.map((item, idx) => (
                <Square item={item} key={`${idx}`} onClick={() => handleClick(idx)} />
            ))}
        </div>
    );

    function handleClick(idx) {
        if (!isEndGame) {
            let currentSquares = [...squares];
            if (currentSquares[idx] === null) {
                currentSquares[idx] = isXnext ? 'X' : 'O';
                onChangeSquares(currentSquares);
                onChangeNext(prev => !prev);
            } else {
                alert('Эта клетка занята! Выбери свободную');
            }
        }
    };
};

export default Board;

