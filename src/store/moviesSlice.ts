import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMovies=createAsyncThunk('movies/fetchMovies', async (_,{rejectWithValue})=> {
    try {
         const moviesList = [];

          let page = 1;
          while (page <= 3) {
            const res = await fetch(`https://www.omdbapi.com/?apikey=b5364880&s=Batman&page=${page}`);
            const movies = await res.json();
            movies.Search.forEach((movie) => moviesList.push(movie));
            page++;
            // dispatch(addMovies(movies))
          }
        return moviesList
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
 
})

const moviesSlice =createSlice({
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

export const {addMovies}=moviesSlice.actions
export default moviesSlice.reducer