import {createSlice} from "@reduxjs/toolkit"


const initialState= [{
    id: "1",
    title: "puto",
    description: "el puto mas puto asies",
    status: false
}]

export const agentSlice = createSlice({
    name: "agents",
    initialState,
    reducers:{
        addAgent:(state, action) =>{
            state.push(action.payload)
        },
        deleteAgent:(state, action) =>{
            const agentFound = state.find(agent => agent.id === action.payload)
            if (agentFound){
                state.splice(state.indexOf(agentFound), 1)
            }
        },
        updateAgent:(state, action) =>{
            const {id, title, description}= action.payload
            const foundAgent = state.find(agent => agent.id === id)

            if(foundAgent){
                foundAgent.title = title
                foundAgent.description = description
            }
        }
    }
})

export const {addAgent, deleteAgent, updateAgent} = agentSlice.actions
export default agentSlice.reducer