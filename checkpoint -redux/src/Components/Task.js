import React,{useState} from "react"
import {toggleIsDone, edit} from "../Actions/Actions"
import {useDispatch} from "react-redux"


function Task ({task}) {

const [edited, setEdited] = useState(false)
const dispatch = useDispatch()

return (
    <li onClick={() => dispatch(toggleIsDone(task.id))}>

      {task.isDone ? <p>Done</p> : <p>Not Done</p>}

      <button onClick={() => setEdited(!edited)}> {edited ? "Update" : "Edit"}</button>

      {edited ? <input type="text" value={task.description} onChange={(e) => dispatch(edit(e.target.value,task.id))}/> 
      : <p>{task.description} </p> 
      }

    </li>
  );
}

export default Task