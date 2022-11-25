import {useSelector} from 'react-redux'

function AgentForm (){
    console.log('AgentForm')

    const stateAgent = useSelector(state => state.agents)
    console.log(stateAgent)

    return (
        <div>
            <h1>
                AgentForm
            </h1>
        </div>
    )
}

export default AgentForm