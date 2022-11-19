import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    name: "",
    location: "",
    cityState: "",
    description: "",
    size: 0,
    price: 0
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