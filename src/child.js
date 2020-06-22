import React, {useContext} from 'react';
import ValueContext from './valuecontext';



function Child() 
{
  let value=useContext(ValueContext);
   
  return(
      <div>
          <h2>Child number is:{value[0]}</h2>
          <button onClick={()=>{value[1](++value[0])}}>Update value</button>
      </div>
  
    
  )
   

 
 
}

export default Child;