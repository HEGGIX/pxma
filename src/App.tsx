import './App.css'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import { SignUp } from './pages/sign-up/sign-up'
// import { UserButton } from './ui-components/person/person'
// import { SignIn } from './pages/sign-up/sign-in/sign-in'
// import { Layout } from './Layout'
// import { Layout } from './Layout'
// import { Movies } from './components/movies/movies'
import { Filters } from './components/filters/filters'


function App() {
  return (
    <>
    <Filters/>
    {/* <Movies/> */}
    {/* <Layout/>
    <BrowserRouter>
      <Routes>
            <Route path='/sign-in' element = {<SignIn/>}/>
            <Route path='/sign-up' element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
      <UserButton userName = {"Gleb Ermakovich"}/> */}
    </>
  )
}

export default App
