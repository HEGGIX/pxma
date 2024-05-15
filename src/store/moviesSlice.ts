import { createAsyncThunk, createSlice } from "../../node_modules/@reduxjs/toolkit/dist/index"


export const fetchMovies=createAsyncThunk('movies/fetchMovies', async (_,{rejectWithValue})=> {
    try {
        const responce = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=b5364880')
    

        if(!responce.ok){
            throw new Error('Error is here  ):')
        }
        const data = await responce.json()
        return data
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
 
})

const todosSlice =createSlice({
    name:'movies',
    initialState:{
        movies:[],
        status:null as null|'loading'|'fulfilled'|'rejected',
        error:null as null |string
    },
    reducers:{
        addMovies(state,action){
            state.movies.push(action.payload)
        }
    }
})

export const {addMovies}=todosSlice.actions