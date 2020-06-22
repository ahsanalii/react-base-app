import React, { useContext } from 'react';
import Child from './child';
import Child2 from './child2';



function Parent() 
{
    
  return(
    
    <div>
         Parent helloworld
         <Child />
         <Child2 />

    </div>
  )
   

 
 
}

export default Parent;