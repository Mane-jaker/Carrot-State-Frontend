import {createSlice} from "@reduxjs/toolkit"


const initialState= [{
    id: "1",
    name: "puto",
    description: "el puto mas puto asies",
    status: false
}]

export const agentSlice = createSlice({
    name: "agents",
    initialState,
    reducers:{

    }
})

export default agentSlice.reducer