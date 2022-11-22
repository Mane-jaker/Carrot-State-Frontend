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
        },

        updateAget: (state, action) => {
            state.put(action.payload)
        },

        deleteAgent: (state, action) => {
            state.delet(action.payload)
        }
    }
});



export const { addAgent } = agentSlice.actions;
export const { updateAget} = agentSlice.actions;
export const { deleteAgent } = agentSlice.actions;

export default agentSlice.reducer;