import React, { useState, useEffect } from "react";

const State = () =>{
    
  const [count,  setCount] = useState(0);
  const [disabled, setDisabled ] = useState(true);

  const ResetDisabled = () => {
    setCount(count+1);
    setDisabled(false);
  }

  useEffect(() => {
    document.title = count
  })

  return (
    <div>
      <h3>useState Function</h3>
      <button onClick={ResetDisabled}>+</button>
      {count}
      <button onClick={() => {setCount(count-1); if(count === 1) setDisabled(true)}} disabled={disabled}>-</button>
      <button onClick={() => {setCount(0);  setDisabled(true)}} disabled={disabled}>RESET</button>
    </div>  
  );
}

export default State;