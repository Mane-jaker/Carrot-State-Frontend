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
        },
        updatePLot: (state, action) => {
            state.put(action.payload)
        },
        deletePlot: (state, action) => {
            state.delete(action.payload)
        }
     }
});

export const {addPlot} = plotSlice.actions;
export const {updatePLot} = plotSlice.actions;
export const {deletePlot} = plotSlice.actions;

export default plotSlice.reducer;