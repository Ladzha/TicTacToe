
const GameSymbol = ({symbol, SYMBOL_X, SYMBOL_O}) => {

  const getSymbolClassName = (symbol)=>{
    if(symbol === SYMBOL_X) return 'symbol-x';
    if(symbol === SYMBOL_O) return 'symbol-o';
    return '';
  }

  return (<span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol} </span>)
}

export default GameSymbol