import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'


function AgentForm (){
    
    const [agent, setAgent] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const agents = useSelector(state => state.agents)


    const handleChange = e => {
        setAgent({
            ...agent,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(params.id){
            dispatch(updateAgent(agent))
        }else{
            dispatch(addAgent({
            ...agent,
            id: uuid(),
        }))
        }
        navigate('/carloxd')
    }

    useEffect(() => {
        if (params.id){
            setAgent(agents.find((agent) => agent.id === params.id))
        }
    },[])

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' type="text" placeholder='title' onChange={handleChange} value={agent.title} />

            <textarea name="description" placeholder='description' onChange={handleChange} value={agent.description}></textarea>

            <button>save</button>
        </form>
    )
}

export default AgentForm