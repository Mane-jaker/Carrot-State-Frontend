import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'items',
    initialState: [1,2,3],
    reducers: {

    }
})

export default itemSlice.reducer;