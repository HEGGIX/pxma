import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout'
import { Filters } from './components/filters/filters'
import { FiltersContext } from './context/context'
import { useState } from "react";
import { SignIn } from './pages/sign-up/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { UserContext } from './context/context';
import { Confirmation } from './pages/confirmation/confirmation';
import { Movies } from './components/movies/movies';
import { MoviesItem } from './components/moviesItem/moviesItem';

function App() {
  const [isActive, setIsactive] = useState(false);
  return (
    <>
      <FiltersContext.Provider value={{
          isActive: isActive, setIsactive: setIsactive 
        }}>
        <Filters/>
        <Layout/>
        <Movies/>
      </FiltersContext.Provider>
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
