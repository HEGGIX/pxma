import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout'
import { Filters } from './components/filters/filters'
import { FiltersContext } from './context/context'
import { useEffect, useState } from "react";
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { UserContext } from './context/context';
import { Confirmation } from './pages/confirmation/confirmation';
import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';
import { OneMovie } from './pages/oneMovie/oneMovie';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:imdbID" element={<OneMovie/>} />
        <Route path = "favorites" element = {<Favorites/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Movies/> */}
    {/* <BrowserRouter>
      <Routes>
            <Route path='/sign-in' element = {<SignIn/>}/>
            <Route path='/sign-up' element = {<SignUp/>}/>
            <Route path = "/confirmation" element = {<Confirmation/>}/>
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App

