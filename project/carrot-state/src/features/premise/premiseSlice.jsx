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
        },
        updatePremise: (state, action) => {
            state.put(action.payload)
        },
        deletePremnise: (state, action) =>{
            state.delete(action.payload)
        }
    }
});

export const {addPremise} = premiseSlice.actions;
export const {updatePremise} = premiseSlice.actions;
export const {deletePremnise} = premiseSlice.actions;

export default premiseSlice.reducer;