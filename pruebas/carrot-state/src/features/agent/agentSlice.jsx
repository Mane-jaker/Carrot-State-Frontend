import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    id: 0,
    name: "",
    email: "",
    password: "",
    profilePicture: [],
    numberOfSales: 0,
    numberOfPropierties: 0,
    status: false
};


export const agentSlice = createSlice({
    name: 'agents',
    initialState: {},
    reducers: {
        addAgent: (state, action) => {
            state.push(action.payload)        
        }
    }
});

export const { addAgent } = agentSlice.actions;

export default agentSlice.reducer;