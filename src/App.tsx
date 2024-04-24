import './App.css'
import { SignUp } from './components/sign-up/sign-up'
import { UserButton } from './ui-components/person/person'

function App() {
  return (
    <>
      <UserButton userName = {"Gleb Ermakovich"}/>
      <SignUp/>
    </>
  )
}

export default App
