import React, {useState} from 'react'
import './room.css';

function Room(){
    let [isLit,setLit] = useState(true);
    return(
        <div className={`room ${isLit ? "lit" : "dark"}`}>
        <h1>The room is {isLit ? "lit" : "dark"} </h1>
        <button onClick={()=>setLit(!isLit)}>Press Here</button>
     </div>

    );
   



}


export default Room;