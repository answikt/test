import React from 'react';

const Square = ({ item, onClick }) => {
  return (
    <div className="square" onClick={onClick}>{item}</div>
  );
}

export default Square;