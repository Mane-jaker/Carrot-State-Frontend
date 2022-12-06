import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: '5'
}

export const idAgentSlice = createSlice({
    name: 'idagents',
    initialState,
    reducers: {
        addIdAgent: (state, action) => {
            state.id = action.payload       
        }
    }
})

export const { addIdAgent } = idAgentSlice.actions;

export default idAgentSlice.reducer;