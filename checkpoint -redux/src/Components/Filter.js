import { showAll, showDone, showNotDone} from '../Actions/Actions';
import {useDispatch} from 'react-redux'


function Filter () {

const dispatch = useDispatch()

return (
<div>

    <button onClick={() => dispatch(showAll())}> All Tasks </button>

    <button onClick={() => dispatch(showDone())}> Done Tasks</button>

    <button onClick={() => dispatch(showNotDone())}> Not Done Tasks</button>
    
</div>
)
}

export default Filter