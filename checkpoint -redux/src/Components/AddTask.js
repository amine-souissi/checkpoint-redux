import React,{useState} from 'react';
import {addTask} from "../Actions/Actions"
import {useDispatch} from "react-redux"


function AddTask() {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    return (
        <div>
        <input type="text" onChange={e => setText(e.target.value)} value={text}/>    
        <button onClick={() => dispatch(addTask()) , setText("")}> Add </button>
        </div>
    )
}

export default AddTask
