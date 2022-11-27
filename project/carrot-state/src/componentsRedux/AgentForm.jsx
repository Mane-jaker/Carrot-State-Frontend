import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addAgent} from '../features/agent/AgentSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'


function AgentForm (){
    
    const [agent, setAgent] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        setAgent({
            ...agent,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(addAgent({
            ...agent,
            id: uuid(),
        }))
        navigate('/carloxd')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' type="text" placeholder='title' onChange={handleChange} />

            <textarea name="description" placeholder='description' onChange={handleChange}></textarea>

            <button>save</button>
        </form>
    )
}

export default AgentForm