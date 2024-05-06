import './App.css'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import { SignUp } from './pages/sign-up/sign-up'
// import { UserButton } from './ui-components/person/person'
// import { SignIn } from './pages/sign-up/sign-in/sign-in'
import { Layout } from './Layout'
// import { Movies } from './components/movies/movies'
import { Filters } from './components/filters/filters'
import { FiltersContext } from './context/context'
import { useState } from "react";

function App() {
  const [isActive, setIsactive] = useState(false);
  return (
    <>
      <FiltersContext.Provider value={{
          isActive: isActive, setIsactive: setIsactive 
        }}>
        <Filters/>
        <Layout/>
      </FiltersContext.Provider>
    {/* <Movies/> */}
    {/* <BrowserRouter>
      <Routes>
            <Route path='/sign-in' element = {<SignIn/>}/>
            <Route path='/sign-up' element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
      <UserButton userName = {"Gleb Ermakovich"}/>
    </> */}
    </>
  )
}

export default App
