// ES 6
import React from 'react';
const person = (props) => {
    return <div>
       <p onClick={props.click}>im {props.name} and i am {props.age} years old </p>

       <input type="text" onChange={props.nameChanged} value={props.value}/>
       <input type="number" onChange={props.ageChanged} value={props.value}/>
    </div>
}

export default person