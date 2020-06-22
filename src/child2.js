import React, { useReducer } from 'react';
import numberReducer from './numberReducer';




function Child2() 
{
    let [state,dispatch]=useReducer(numberReducer,50);
  
   
  return(
      <div>
          <h2>Child2 number {state} </h2>
          <button onClick={()=>{dispatch({type:"INCREMENT",val:10})}}>increment</button>
          <button onClick={()=>{dispatch({type:"DECREMENT",val:5})}}>decrement</button>
 
      </div>
  
    
  )
   

 
 
}

export default Child2;