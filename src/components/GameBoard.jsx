import React from 'react';
import GameCell from './GameCell';

const GameBoard = ({cells, handleClick, renderSymbol, winSequence}) => {
  return (
    <div className='game-board'>        
    {cells.map((symbol, index)=>{
      return(
      <GameCell
      key={GameCell}
      symbol={symbol}
      index={index}
      handleClick={handleClick}
      renderSymbol={renderSymbol}
      winSequence={winSequence}
      />)
  })}</div>
  )
}

export default GameBoard