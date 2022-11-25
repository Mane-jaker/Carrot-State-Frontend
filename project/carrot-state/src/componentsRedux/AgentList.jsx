import React from 'react'
import {useSelector} from 'react-redux'

function AgentList() {

    const Agent = useSelector (state => state.agent)
    console.log(Agent)

  return (
    <div>
        <h1></h1> AgentList
        {Agent.map(agent =>
            <div>
                <h3>{agent.name}</h3>
            </div>
        )}
    </div>
  )
}

export default AgentList