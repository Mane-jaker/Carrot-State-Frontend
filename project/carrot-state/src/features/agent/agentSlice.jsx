import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { 
        id: "1",
        title: "Task 1",
        description: "",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "",
        completed: false
    },
    {
        id: "3",
        title: "Task 3",
        description: "",
        completed: false
    }
];

export const agentSlice = createSlice({
    name: 'agents',
    initialState: [],
    reducers: {
        addAgent: (state, action) => {
            state.push(action.payload)        
        }
    }
});

export const { addAgent } = agentSlice.actions;

export default agentSlice.reducer;