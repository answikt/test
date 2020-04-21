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

const mapStateToProps = ({squares, isXnext, status, isEndGame}) => {
  return {squares, isXnext, status, isEndGame}
};

export default connect(mapStateToProps, actions)(App);