import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMoviesItem } from "../types/types";

export const fetchTrendsMovies=createAsyncThunk('movies/fetchMovies', async (_,{rejectWithValue})=> {
    try {
         const trendsMoviesList = [];

          let page = 1;
          while (page <= 3) {
            const res = await fetch(`https://www.omdbapi.com/?apikey=b5364880&s=Batman&page=${page}`);
            const movies = await res.json();
            console.log(movies)
            movies.Search.filter((movie) => {movie.Year > "2015"? trendsMoviesList.push(movie):console.log("no")});
            page++;
          }
        return trendsMoviesList
    } catch (error) {
        return rejectWithValue((error as Error).message)
    }
})

const trendsSlice = createSlice({
    name:'trends',
    initialState:{
        trendsMovies:[]
    },
    reducers:{
        addTrendsMovies(state:{trendsMovies:IMoviesItem[]},action:{
            payload: {oneMovie:IMoviesItem};
            type: string;
        }){
            // if(action.payload.oneMovie.Year > "2019"){
            //     state.trendsMovies.push(action.payload.oneMovie)
            // }
            state.trendsMovies.push(action.payload.oneMovie)
            console.log(state.trendsMovies)
        }
    },
    extraReducers: builder => {
        builder
          .addCase(fetchTrendsMovies.pending, (state) => {
            state.status = 'loading'
            state.error=null
          })
          .addCase(fetchTrendsMovies.fulfilled,(state,action)=>{
            state.status="fulfilled"
            state.error=null
            state.trendsMovies=action.payload
          })
          .addCase(fetchTrendsMovies.rejected,(state,action)=>{
            state.status='rejected'
            state.error =(action.payload as string)
          })
    }
})
export const {addTrendsMovies}=trendsSlice.actions
export default trendsSlice.reducer