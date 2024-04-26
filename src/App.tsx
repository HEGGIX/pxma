import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { SignUp } from './pages/sign-up/sign-up'
// import { UserButton } from './ui-components/person/person'
import { SignIn } from './pages/sign-up/sign-in/sign-in'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path='/sign-in' element = {<SignIn/>}/>
            <Route path='/sign-up' element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>
      {/* <SignIn/> */}
      {/* <UserButton userName = {"Gleb Ermakovich"}/> */}
      {/* <SignUp/> */}
    </>
  )
}

export default App
