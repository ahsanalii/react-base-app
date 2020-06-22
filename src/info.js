import React from 'react'
import './info.css'

function Info(props){
    return(
        <div className="infoDiv">
            <h1>
                Hello My name is {props.name}.I am {props.age} old.I live in {props.city}.
                I love {props.hobby}, Thanks.
                My lucky number is {props.lnbr+10}

            </h1>
        </div>

    )
}
export default Info;