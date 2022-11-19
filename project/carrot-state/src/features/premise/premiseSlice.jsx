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