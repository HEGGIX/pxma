import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser=createAsyncThunk('user/createUser',async (signinObj:{
    username: string;
    email: string;
    password: string;
    course_group: number;
},{rejectWithValue,dispatch})=>{
    try {
        const responce = await fetch('https://studapi.teachmeskills.by/auth/users/',{
            method: 'POST',
            body: JSON.stringify({
                "username": signinObj.username,
                "email": signinObj.email,
                "password": signinObj.password,
                "course_group": 7
              }),
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": "2u9EiabuRdAvpzVVsb1AyBCN4NHiCd5Ea3MCV5Pzj5kaopDjEW0Dqhmb3jXgmn3p"
            },
          })
       

        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
       const data = await responce.json()

        dispatch(addUser(data))
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
})

const userSlice = createSlice({
    name:'user',
    initialState:{
       user:null,
       status: null as null|'loading'|'fulfilled'|'rejected',
       error: null as null|string
    },
    reducers:{
        addUser(state,action){
            state.user=action.payload
        },
        
    },
    extraReducers: builder =>{
        builder
        .addCase(createUser.pending, (state) => {
            state.status = "loading",
            state.error = null
        })
        .addCase(createUser.fulfilled, (state,action) => {
            state.status = "fulfilled",
            state.error = null,
            state.user = action.payload
        })
    }
})
export const {addUser}=userSlice.actions
export default userSlice.reducer