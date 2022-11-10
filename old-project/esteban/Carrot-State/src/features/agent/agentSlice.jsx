import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const agentSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {
        addAgent: (state, action) => {
            state.push(action.payload)        
        }
    }
})

export const {addAgent} = agentSlice.actions;

export default agentSlice.reducer;