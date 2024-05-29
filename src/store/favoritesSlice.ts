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
        }
        
    }
})
export const {addFavoriteMovies}=favoritesSlice.actions
export default favoritesSlice.reducer