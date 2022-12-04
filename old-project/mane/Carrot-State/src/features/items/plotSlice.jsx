import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "1",
    name: "Nombre_terreno",
    description: "descricion_terreno",
    price: 20000,
    size: 20,
    location: "direccion_casa",
}

export const plotSlice = createSlice({
    name: 'plots',
    initialState,
    reducers: {
    }
})

export default plotSlice.reducer;