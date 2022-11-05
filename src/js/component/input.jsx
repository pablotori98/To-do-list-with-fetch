import React, { useState } from "react";



const Input =()=> {

const [input, setInput] = useState ("")
const [tasks, setTasks] = useState ([""])


const handleChange = (event)=>{
    setInput(event.target.value)
}

const addInput=()=>{
    setTasks(tasks.concat(input))
}

    return (
        <div>
            <input onChange={handleChange}/>
            <span><button onClick={addInput} >Enviar</button></span>
            <p>Este es el valor del input: {input}</p>
            {tasks.map((element)=>{
                return (
                    <p>{element}</p>
                )
            })} 
        </div>
    )
}


export default Input;