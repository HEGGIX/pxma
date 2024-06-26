import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMoviesItem } from "../types/types";

export const fetchMovies=createAsyncThunk('movies/fetchMovies', async (page,{rejectWithValue})=> {
  try {
       const moviesList = [];

        let page = 1;
        while (page <=3) {
          const res = await fetch(`https://www.omdbapi.com/?apikey=b5364880&s=Batman&page=${page}`);
          const movies = await res.json();
          movies.Search.forEach((movie) => moviesList.push(movie));
          page++;
        }
      return moviesList
  } catch (error) {
      return rejectWithValue((error as Error).message)
  }
})

export const fetchOneMovie = createAsyncThunk('todos/fetchTodos', async (imdbID,{rejectWithValue})=> {
  try {
      const responce = await fetch(`https://www.omdbapi.com/?apikey=b5364880&i=${imdbID}`)
  

      if(!responce.ok){
          throw new Error('Error is here  ):')
      }
      const data = await responce.json()
      return data
  } catch (error) {
      return rejectWithValue((error as Error).message)
  }

})

const moviesSlice =createSlice({
    name:'movies',
    initialState:{
        movies:[],
        result: null,
        searchMovies: "",
        status:null as null|'loading'|'fulfilled'|'rejected',
        error:null as null |string
    },
    reducers:{
      setSearchMovies(state,action){
        state.searchMovies = action.payload
    }
    },
    extraReducers: builder => {
        builder
          .addCase(fetchMovies.pending, (state) => {
            state.status = 'loading'
            state.error=null
          })
          .addCase(fetchMovies.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.error=null
            state.movies=action.payload
            state.result =  state.movies.map((movie:IMoviesItem)=> movie.Title.includes(state.searchMovies))
          })
          .addCase(fetchMovies.rejected,(state,action)=>{
            state.status='rejected'
            state.error =(action.payload as string)
          })
      }
})

export const {setSearchMovies,debouncedSearch}=moviesSlice.actions
export default moviesSlice.reducer