import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

export const plotSlice = createSlice({
    name: 'plots',
    initialState: {},
    reducers: {
        addPlot: (state, action) => {
            state.push(action.payload)
        }
     }
});

export const {addPlot} = plotSlice.actions;

export default plotSlice.reducer;