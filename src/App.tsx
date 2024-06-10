import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { AuthContext, FiltersContext, ThemeContext } from './context/context'
import { useEffect, useState } from "react";
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { Confirmation } from './pages/confirmation/confirmation';
import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';
import { OneMovie } from './pages/oneMovie/oneMovie';
import { Settings } from './pages/settings/settings';
import { Trends } from './pages/trends/trends';
import { Activation } from './pages/activation/activation';
import Auth from './hooks/auth';
import AuthProvider from './hooks/authProvider';


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
        <AuthProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:imdbID" element={<Auth><OneMovie/></Auth>} />
            <Route path = "trends" element = {<Trends/>}/>
            <Route path = "favorites" element = {<Favorites/>}/>
            <Route path = "settings" element = {<Settings/>}/>
            <Route path='sign-in' element = {<SignIn/>}/>
            <Route path='sign-up' element = {<SignUp/>}/>
            <Route path = "confirmation" element = {<Confirmation/>}/>
            <Route path = "activation/:uid/:token" element = {<Activation/>}/>
          </Routes>
        </AuthProvider>
        </ThemeContext.Provider>
      </FiltersContext.Provider>
    </>
  )
}
export default App

