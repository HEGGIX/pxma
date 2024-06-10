import { Input } from "../../ui-components/input/input"
import { Button } from "../../ui-components/button/button"
import { inputData } from "../../ui-components/input/data-input"
import { useNavigate } from "react-router-dom"
import logo from "./pixema.png"
import { useDispatch } from "react-redux"
import "./sign-in.scss"
import { useState } from "react"
import { Action, ThunkDispatch } from "@reduxjs/toolkit"
import { getUser } from "../../store/userSlice"


export const SignIn = () =>{
    const navigate = useNavigate()
    const dispatch=useDispatch<ThunkDispatch<unknown, unknown, Action>>()
    const [userLogin,setUserLogin]=useState({email:'',password:''})
    const formHanlder=(event:React.ChangeEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        dispatch(getUser(userLogin))
     
    }
    const inputHanlder=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value,name}=event.target
        setUserLogin(prev=>({
            ...prev,[name]:value
        })
  )  }
    return(
        <div className="sign-in">
            <img src={logo} className="logo"/>
            <div className="sign-in__container">
                <form className="sign-in__wrapper" onSubmit={formHanlder}>
                    <h2 className="sign-in__title">Sign in</h2>
                    <Input type={inputData[1].type} placeholder={inputData[1].placeholder} title = {inputData[1].title} value = {userLogin.email} name = "email" onChange = {inputHanlder}/>
                    <Input type={inputData[2].type} placeholder={inputData[2].placeholder} title = {inputData[2].title} value = {userLogin.password} name = "password" onChange = {inputHanlder}/>
                    <Button text={"Sign in"}/>
                    <p className="sign-in__question">Don’t have an account?<button className="sign-in__link" onClick={()=>navigate("/sign-up")}> Sign up</button></p>
                </form>
            </div>
            <p className="sign-in__patent">© All Rights Reserved</p>
        </div>
    )
}