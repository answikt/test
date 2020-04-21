import React from 'react';
import { connect } from 'react-redux';
import Board from '../components/board';
import * as actions from '../actions';


function App({squares, isXnext, status, isEndGame, changeSquare, resetGame}) {

  return (
    <div className="app">
      <div className="header">{status}</div>
      <Board 
        squares={squares} 
        isXnext={isXnext}
        isEndGame={isEndGame}
        onChangeSquares={squares => changeSquare(squares)}
      />
      {isEndGame && (<div className="reset">
        <button className="reset__button" onClick={() => resetGame()}>Начать заново?</button>
      </div>)}
    </div>
  );
}

export default connect(state => state, actions)(App);