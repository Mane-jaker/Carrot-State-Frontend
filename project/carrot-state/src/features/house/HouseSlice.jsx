import {createSlice} from "@reduxjs/toolkit"


const initialState= [{
    id: "1",
    title: "",
    description: "",
    status: false
}]

export const houseSlice = createSlice({
    name: "houses",
    initialState,
    reducers:{
        addHouse:(state, action) =>{
            state.push(action.payload)
        },
        deleteHouse:(state, action) =>{
            const houseFound = state.find(house => house.id === action.payload)
            if (houseFound){
                state.splice(state.indexOf(houseFound), 1)
            }
        },
        updateHouse:(state, action) =>{
            const {id, title, description}= action.payload
            const houseAgent = state.find(house => house.id === id)

            if(houseAgent){
                foundHouse.title = title
                foundHouse.description = description
            }
        }
    }
})

export const {addHouse, deleteHouse, updateHouse} = houseSlice.actions
export default houseSlice.reducer