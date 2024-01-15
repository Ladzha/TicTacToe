import React from 'react'

const GameCell = ({symbol, index, handleClick,renderSymbol, winSequence}) => {
  const isWinner = winSequence?.includes(index);
  return(
    <div className={isWinner ? 'cell win' : 'cell'} 
    onClick={()=>{handleClick(index)}}> 
    {symbol ? renderSymbol(symbol) : null}</div>
  )
  
}

export default GameCell