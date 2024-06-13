import "./sign-up.scss"
import logo from "./pixema.png"
import { Input } from "../../ui-components/input/input"
import { Button } from "../../ui-components/button/button"
import { inputData } from "../../ui-components/input/data-input"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import React,{useState } from "react"
import { signUpUser } from "../../store/userSlice"
import { useAuth } from "../../hooks/useAuth"
import { Action, ThunkDispatch } from "@reduxjs/toolkit"
import AuthProvider from "../../hooks/authProvider"


export const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<ThunkDispatch<unknown, unknown, Action>>();
    const [value,setValue]=useState({
        username: "",
        email: "",
        password: "",
        course_group: 7
    })
    const {signin}=useAuth()
    const location =useLocation()
    const submitHandler =(event:React.ChangeEvent<HTMLFormElement>)=>{
        event?.preventDefault()
        dispatch(signUpUser(value))
        signin(value,()=>navigate('/confirmation',{state:{from:location},replace:true}))
    }
    const inputHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setValue((prev)=>({
            ...prev,
            [name]:value
        }
        ))
    }
    console.log(value)
    return(
        <>
        <AuthProvider>
        <div className="sign-up">
            <img src={logo} className="logo"/>
            <div className="sign-up__container">
                <form className="sign-up__wrapper" onSubmit={submitHandler}>
                    <h2 className="sign-up__title">Sign Up</h2>
                    <Input type={inputData[0].type} name = "username" placeholder={inputData[0].placeholder} title = {inputData[0].title} value = {value.username} onChange = {inputHandler}/>
                    <Input type={inputData[1].type} name = "email" placeholder={inputData[1].placeholder} title = {inputData[1].title} value = {value.email} onChange = {inputHandler}/>
                    <Input type={inputData[2].type} name = "password" placeholder={inputData[2].placeholder} title = {inputData[2].title} value = {value.password} onChange = {inputHandler}/>
                    <Button text={"Sign up"} type ={"submit"}/>
                    <p className="sign-up__question">Already have an account?<button className="sign-up__link" onClick={()=>navigate("/sign-in")}> Sign in</button></p>
                </form>
            </div>
            <p className="sign-up__patent">© All Rights Reserved</p>
        </div>
        </AuthProvider>
        </>
    )
}