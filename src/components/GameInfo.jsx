
const GameInfo = ({isDraw, winSequence, winSymbol, currentStep}) => {
  return (
    <div className='game-info'>
    
    {isDraw ? 'Draw': winSequence ? 'Winner is: ' : 'Next player is: '}

    {isDraw ? '': winSequence ? winSymbol : currentStep}
    
    </div>  )
}

export default GameInfo