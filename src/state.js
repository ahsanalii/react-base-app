import React,{useState} from 'react';
import './state.css' 

function State()
{
    let[temp,setTemp]=useState(72);
    
    return(
        <div >
            <h1>Temperature is:{temp}</h1>

            <button  onClick={()=>setTemp(temp++)}>+</button>
            <button  onClick={()=>setTemp(temp--)}>-</button>

            
        </div>
      
    )
}

export default State;