import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name:'userName',
    initialState:'',
    reducers:{
        setUseNameGlobal:(state,action)=>action.payload

    }
})

export const {setUseNameGlobal}= userNameSlice.actions
export default userNameSlice.reducer