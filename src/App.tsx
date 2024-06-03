import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout'
import { Filters } from './components/filters/filters'
import { FiltersContext, ThemeContext } from './context/context'
import { useEffect, useState } from "react";
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { UserContext } from './context/context';
import { Confirmation } from './pages/confirmation/confirmation';
import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';
import { OneMovie } from './pages/oneMovie/oneMovie';
import { Settings } from './pages/settings/settings';



function App() {
  const [isActive, setIsactive] = useState(false);
  const [themeIsActive,setThemeIsActive] = useState(false);
  useEffect(() => {
    if(themeIsActive === true) {
      document.body.style.background = "white"
    }else{
      document.body.style.background = "black"
    }
  }, [themeIsActive])
  return (
    <>
      <FiltersContext.Provider value={{
            isActive: isActive, setIsactive: setIsactive 
          }}>
        <ThemeContext.Provider value = {{
            themeIsActive: themeIsActive, setThemeIsActive: setThemeIsActive
        }}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/:imdbID" element={<OneMovie/>} />
              <Route path = "favorites" element = {<Favorites/>}/>
              <Route path = "settings" element = {<Settings/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
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

