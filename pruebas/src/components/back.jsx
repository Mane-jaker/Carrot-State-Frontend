import {useSelector} from "react-redux"
import Get from './get'

function back(){
    const stateGet = useSelector(state => state.tasks)
    console.log(stateGet)

    return (
        <div>
            <Get/>
            <div>Texto Reflejado</div>
            <textarea></textarea>
        </div>
    )
}

export default back