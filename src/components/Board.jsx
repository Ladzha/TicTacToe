import React, {useState} from 'react'
import GameInfo from './GameInfo';
import ResetGame from './ResetGame';
import GameBoard from './GameBoard';
import computeWinner from '../ComputeWinner.js'

const SYMBOL_X = 'x';
const SYMBOL_O = 'o';

const Board = () => {

  const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winSequence, setWinSequence] = useState();

  const getSymbolClassName = (symbol)=>{
    if(symbol === SYMBOL_X) return 'symbol-x';
    if(symbol === SYMBOL_O) return 'symbol-o';
    return '';
  }

  const renderSymbol = (symbol)=>
  <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>


  const handleClick = (index)=>{
    if(cells[index] || winSequence) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy)
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X)
    setWinSequence(winner)
  }

  const winSymbol = winSequence ? cells[winSequence[0]] : undefined;
  const isDraw = !winSequence && cells.filter(value=>value).length === 9;


  const handleReset=()=>{
    setCells([null, null, null, null, null, null, null, null, null]);
    setCurrentStep(SYMBOL_X);
    setWinSequence(undefined)

  }

  const randomPosition=(min, max)=>{
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
  }


  return (
    <div className='game'>

      <h1 className='title'>Tic Tac Toe</h1>

    <div className='board'>

      <GameBoard 
      cells={cells} 
      handleClick={handleClick} 
      renderSymbol={renderSymbol} 
      winSequence={winSequence}/>

      {/* <div className='test' 
      style={{top: `${randomPosition(1, 7)}`, left: `${randomPosition(1,7)}`}}>
        X
      </div> */}

      <GameInfo
      isDraw={isDraw}
      winSequence={winSequence}
      winSymbol={winSymbol}
      currentStep={currentStep}/>

      <ResetGame handleReset={handleReset}/>

      </div>
    </div>
  )
}

export default Board