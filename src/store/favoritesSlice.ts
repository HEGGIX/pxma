import { createSlice } from "@reduxjs/toolkit";
import { IMoviesItem } from "../types/types";

const favoritesSlice = createSlice({
    name:'favorite',
    initialState:{
        favoriteMovies:[]
    },
    reducers:{
        addFavoriteMovies(state:{favoriteMovies:IMoviesItem[]},action:{
            payload: {oneMovie:IMoviesItem};
            type: string;
        }){
            state.favoriteMovies.push(action.payload.oneMovie)
            
        },
        removeFavoriteMovies(state:{favoriteMovies:IMoviesItem[]},action:{payload: {imdbID:string}}){
            state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.imdbID !== action.payload.imdbID )
        }
    }
})
export const {addFavoriteMovies,removeFavoriteMovies}=favoritesSlice.actions
export default favoritesSlice.reducer