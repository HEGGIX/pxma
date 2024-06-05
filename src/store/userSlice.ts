import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username:null,
        email:null,
        password:null,
        token: null,
        id: null
    },
    reducers:{
        setUser(state,action){
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            state.id = action.payload.id;
        }
    }
})
export const {setUser}=userSlice.actions
export default userSlice.reducer