import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

export const premiseSlice = createSlice({
    name: 'premises',
    initialState: {},
    reducers: {
        addPremise: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addPremise} = premiseSlice.actions;

export default premiseSlice.reducer;