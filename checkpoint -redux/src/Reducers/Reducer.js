import {ADDTASK,TOGGLEISDONE,EDIT, SHOWALL, SHOWDONE, SHOWNOTDONE} from "../Actions/ActionTypes";


const initialState = {
    Tasks : [{id:1, description:"first task", isDone:false} , {id:2, description:"second task", isDone:true}],
};


const Reducer = (state = initialState, action) => {
switch(action.type) {

    case ADDTASK: 
    return [...state.Tasks,{id: action.id, description: action.description, isDone: action.isDone}]


    case TOGGLEISDONE: 
    return state.Tasks.map(task => (task.id === action.id) ? {...task, isDone: !task.isDone} : task)


    case EDIT:
    return state.Tasks.map(task => (task.id === action.id) ? {...task, description: action.description} : task)

    case SHOWALL: 
    return state.Tasks


    case SHOWDONE: 
    return state.Tasks.filter(task => task.isDone)


    case SHOWNOTDONE:
    return state.Tasks.filter(task => !task.isDone)
        

    default:
    return state;
    }
}

export default Reducer
