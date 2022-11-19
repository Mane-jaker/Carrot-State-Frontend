import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const idAgentSlice = createSlice({
    name: 'idagents',
    initialState,
    reducers: {
        addIdAgent: (state, action) => {
            state.push(action.payload)        
        }
    }
})

export const { addIdAgent } = idAgentSlice.actions;

export default idAgentSlice.reducer;