import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteAgent} from '../features/agent/AgentSlice'
import { Link } from 'react-router-dom'


function AgentList() {

    const Agent = useSelector (state => state.agents)
    console.log(Agent)
    const dispatch = useDispatch()

    const handleDelete = (id) =>{
      dispatch(deleteAgent(id))
    }

  return (
    <div>
        <h1></h1> AgentList
        {Agent.map(agent =>
            <div key={agent.id}>
                <h3>{agent.title}</h3>
                <p>{agent.description}</p>
                <button onClick={() => handleDelete (agent.id)}>delete</button>
                <Link to={`/carloxd/edit-agent/${agent.id}`}>edit</Link>
            </div>
        )}
    </div>
  )
}

export default AgentList