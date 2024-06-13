import { createSlice } from "@reduxjs/toolkit";
import { IMoviesItem } from "../types/types";

const favoritesSlice = createSlice({
    name:'favorite',
    initialState:{
        favoriteMovies:[],
        storageMovies:[]
    },
    reducers:{
        addFavoriteMovies(state:{favoriteMovies:IMoviesItem[]},action:{
            payload: {oneMovie:IMoviesItem};
            type: string;
        }){
            state.favoriteMovies.push(action.payload.oneMovie)
            
        },
        addStorage(state,action){
            state.storageMovies.push(localStorage.setItem("movie",JSON.stringify(state.favoriteMovies)))
        },
        removeFavoriteMovies(state:{storageMovies:IMoviesItem[]},action:{payload: {imdbID:string}}){
            state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.imdbID !== action.payload.imdbID )
        }
    }
})
export const {addFavoriteMovies,removeFavoriteMovies,addStorage}=favoritesSlice.actions
export default favoritesSlice.reducer