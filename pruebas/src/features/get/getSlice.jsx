import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    texto: ""
}

export const getSlice = createSlice ({
    name: "tasks",
    initialState,
    reducer:{
        addText: (state, action) => {
            state.push(action.playoad)
        }
    }
})

export const {addText} = getSlice.actions

export default getSlice.reducer