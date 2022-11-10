import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "1",
    name: "Nombre_local",
    description: "descricion_local",
    price: 20000,
    size: 20,
    location: "direccion_casa",
}

export const premisesSlice = createSlice({
    name: 'premises',
    initialState,
    reducers: {
    }
})

export default premisesSlice.reducer;