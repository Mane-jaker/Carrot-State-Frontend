import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: 1,
    name: "",
    location: "",
    cityState: "",
    description: "",
    size: "",
    price: ""
}];

export const plotSlice = createSlice({
    name: 'plots',
    initialState,
    reducers: {
        addPlot: (state, action) => {
            state.push(action.payload)
        },
        updatePlot: (state, action) => {
            const {id, name, location, cityState, description, size, price}= action.payload
            const foundPlot = state.find(plot => plot.id === id)

            if(foundPlot){
                foundPlot.name= name
                foundPlot.location = location
                foundPlot.cityState = cityState
                foundPlot.description = description
                foundPlot.size = size
                foundPlot.price = price
            }
        },
        deletePlot: (state, action) => {
           const taskFound = state.find(plot => plot.id === action.payload)
           if(taskFound){
                state.splice(state.indexOf(taskFound),1)
           }
        }
     }
});

export const {addPlot} = plotSlice.actions;
export const {updatePlot} = plotSlice.actions;
export const {deletePlot} = plotSlice.actions;

export default plotSlice.reducer;