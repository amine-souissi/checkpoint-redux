import {ADDTASK, TOGGLEISDONE, EDIT, SHOWALL, SHOWDONE, SHOWNOTDONE} from "./ActionTypes"

export const addTask = (description, id) => ({
    type: ADDTASK,
    description,
    id,
    isDone: false
})

export const toggleIsDone = id => ({
    type: TOGGLEISDONE,
    id 
})

export const edit = (description, id) => ({
    type: EDIT,
    description,
    id
    
})

export const showAll = () => ({
    type: SHOWALL
});

export const showDone = () => ({
    type: SHOWDONE
});

export const showNotDone = () => ({
    type: SHOWNOTDONE
});