import "./sign-up.scss"
import logo from "./pixema.png"
import { Input } from "../../ui-components/input/input"
import { Button } from "../../ui-components/button/button"
import { inputData } from "../../ui-components/input/data-input"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { signUpUser } from "../../store/userSlice"
import { useAuth } from "../../hooks/useAuth"



export const SignUp = () => {
    useEffect(() => {
        document.body.style.removeProperty("background");
    },[])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [value,setValue]=useState(  {
        username: "",
        email: "",
        password: "",
        course_group: 7
    })
    // const {signin}=useAuth()
    const location =useLocation()
    // const fromPage=location.state.from.pathname||'/'
    const submitHandler =(event:React.ChangeEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        dispatch(signUpUser(value))
        // signin(value,()=>navigate('/confirmation',{state:{fromPage},replace:true}))
    }
    const inputHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setValue((prev)=>({
            ...prev,
            [name]:value
        }
        ))
    }
    return(
        <>
        <div className="sign-up">
            <img src={logo} className="logo"/>
            <div className="sign-up__container">
                <form className="sign-up__wrapper" onSubmit={submitHandler}>
                    <h2 className="sign-up__title">Sign Up</h2>
                    <Input type={inputData[0].type} placeholder={inputData[0].placeholder} title = {inputData[0].title} value = {value.username} onChange = {inputHandler}/>
                    <Input type={inputData[1].type} placeholder={inputData[1].placeholder} title = {inputData[1].title} value = {value.email} onChange = {inputHandler}/>
                    <Input type={inputData[2].type} placeholder={inputData[2].placeholder} title = {inputData[2].title} value = {value.password} onChange = {inputHandler}/>
                    <Button text={"Sign up"} onClick={() => console.log("hello")}/>
                    <p className="sign-up__question">Already have an account?<button className="sign-up__link" onClick={()=>navigate("/sign-in")}> Sign in</button></p>
                </form>
            </div>
            <p className="sign-up__patent">© All Rights Reserved</p>
        </div>
        </>
    )
}