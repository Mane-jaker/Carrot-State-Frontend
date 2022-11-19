import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    name: "",
    email: "",
    password: "",
    code: 0,
    profilePicture: [],
    comissionAgent: 0,
};

export const realStateSlice = createSlice({
    name: 'real_state',
    initialState: {},
    reducers: {
        addRealState: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addRealState} = realStateSlice.actions;

export default realStateSlice.reducer;