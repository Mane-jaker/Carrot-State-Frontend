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

        }
    }
})

export const {addAgent, deleteAgent} = agentSlice.actions
export default agentSlice.reducer