import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import moviesSlice from "./moviesSlice"
import favoritesSlice from './favoritesSlice'
import trendsSlice from './trendsSlice'


export default configureStore({
    reducer:{
        user:userSlice,
        movies: moviesSlice,
        favorites: favoritesSlice,
        trends: trendsSlice
    }
})

