import {createSlice} from "@reduxjs/toolkit"

const initialState= []

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser:(state, action) =>{
            state.push(action.payload)
        },
        deleteUser:(state, action) =>{
            const userFound = state.find(user => user.id === action.payload)
            if (userFound){
                state.splice(state.indexOf(userFound), 1)
            }
        },
        updateUser:(state, action) =>{
            const {id, token}= action.payload
            const foundUser = state.find(user => user.id === id)

            if(foundUser){
                foundUser.id = id
                foundUser.token = token
            }
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer