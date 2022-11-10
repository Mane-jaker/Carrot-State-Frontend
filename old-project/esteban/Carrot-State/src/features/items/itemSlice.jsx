import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "1",
    name: "Nombre_Casa",
    description: "descricion_casa",
    price: 20000,
    size: 20,
    location: "direccion_casa",
    bathRoomNum: 2,
    rooms: 2,
    floors: 2
}

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    }
})

export default itemSlice.reducer;