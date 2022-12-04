import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    name: "",
    location: "",
    cityState: "",
    description: "",
    bathroom: 0,
    room: 0,
    floor: 0,
    size: 0,
    price: 0
};

export const houseSlice = createSlice({
    name: 'houses',
    initialState: {},
    reducers: {
        addHouse: (state, action) => {
            state.push(action.payload)
        },
        updateHouse:(state, action) =>{
            state.put(action.payload)
        },
        deleteHouse:(state, action) =>{
            state.delete(action.payload)
        }
    }
});

export const {addHouse} = houseSlice.actions;
export const {updateHouse} =houseSlice.actions;
export const {deleteHouse} = houseSlice.actions; 

export default houseSlice.reducer;