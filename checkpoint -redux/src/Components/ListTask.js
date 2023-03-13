import React from 'react'
import Task from "./Task"
import {useSelector} from "react-redux"



function ListTask () {
    const Tasks = useSelector(state => state.Tasks)
    
    return (
    <>
    <ul>
    {Tasks.map(task => <Task key={task.id} task={task}/> )}
    </ul>
    </>
);
}

export default ListTask;