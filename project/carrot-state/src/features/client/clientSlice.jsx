import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    name: "",
    contact: "",
    budget: 0
};

export const clientSlice = createSlice({
    name: 'clients',
    initialState: {},
    reducers: {
        addClient: (state, action) => {
            state.push(action.payload)
        },

        updateClient: (state, action) => {
            state.put(action.payload)
        },
        deleteClient: (state, action) => {
            state.delete(action.payload)
        }
    }
}
);

export const {addClient} = clientSlice.actions;
export const {updateClient} = clientSlice.actions;
export const {deleteClient} = clientSlice.actions;

export default clientSlice.reducer;