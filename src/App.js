import React, { useState } from 'react';

import './App.css';

import Parent from './parent';
import ValueContext from './valuecontext';


function App() 
{
  let value=useState(10);

  return(
    <ValueContext.Provider value={value}>
        <div>
          <h2>Hello World</h2>
          <Parent />
      
          
        </div>

    </ValueContext.Provider>

    
      
    

    
    
    
    
      
    
   
  )
   

 
 
}

export default App;
