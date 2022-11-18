import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

export const houseSlice = createSlice({
    name: 'houses',
    initialState: {},
    reducers: {
        addHouse: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addHouse} = houseSlice.actions;

export default houseSlice.reducer;