import checkWinner from './../utils/check-winner';

const changeSquare = (squares) => {
  return (dispatch, getState) => {
    dispatch(changeSquares(squares));
    const { isXnext } = getState();
    const winner = checkWinner(squares,isXnext);
    if (winner === 'none') {
      dispatch(changeStatus('Ничья'));
      dispatch(finishGame());
    } else if (winner) {
      dispatch(changeStatus(`Выиграл: "${winner}"`));
      dispatch(finishGame());
    } else {
      const player = isXnext ? 'X' : 'O'
      dispatch(changeStatus(`Следующий: "${player}"`));
    }
  }
};

const changeSquares = (squares) => {
  return {
    type: 'CHANGE_SQUARES',
    payload: squares
  };
};

const changeStatus = (status) => {
  return {
    type: 'CHANGE_STATUS',
    payload: status
  };
};

const finishGame = () => {
  return {
    type: 'FINISH_GAME'
  };
};

const resetGame = () => {
  return {
    type: 'RESET_GAME'
  };
};

export {
  changeSquare,
  changeSquares,
  changeStatus,
  finishGame,
  resetGame
};
