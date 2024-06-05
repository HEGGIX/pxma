// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchSearchMovies=createAsyncThunk('movies/fetchMovies', async (search,{rejectWithValue})=> {
//     try {
//          const moviesList = [];
  
//           let page = 1;
//           while (page <= 3) {
//             const res = await fetch(`https://www.omdbapi.com/?apikey=b5364880&s=${search}&page=${page}`);
//             const movies = await res.json();
//             movies.Search.forEach((movie) => moviesList.push(movie));
//             page++;
//           }
//         return moviesList
//     } catch (error) {
//         return rejectWithValue((error as Error).message)
//     }
//   })

//   const moviesSearchSlice =createSlice({
//     name:'moviesSearch',
//     initialState:{
//         moviesSearch:[],
//         searchMovies: "",
//         status:null as null|'loading'|'fulfilled'|'rejected',
//         error:null as null |string
//     },
//     reducers:{

//     },
//     extraReducers: builder => {
//         builder
//           .addCase(fetchSearchMovies.pending, (state) => {
//             state.status = 'loading'
//             state.error=null
//           })
//           .addCase(fetchSearchMovies.fulfilled,(state,action)=>{
//             state.status="fulfilled"
//             state.error=null
//             state.moviesSearch=action.payload
//           })
//           .addCase(fetchSearchMovies.rejected,(state,action)=>{
//             state.status='rejected'
//             state.error =(action.payload as string)
//           })
//       }
// })

// export const {setSearchMovies}=moviesSearchSlice.actions
// export default moviesSearchSlice.reducer