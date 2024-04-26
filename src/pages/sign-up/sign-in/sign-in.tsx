import { Input } from "../../../ui-components/input/input"
import { Button } from "../../../ui-components/button/button"
import { inputData } from "../../../ui-components/input/data-input"
import { useNavigate } from "react-router-dom"
import logo from "./pixema.png"

import "./sign-in.scss"

export const SignIn = () =>{
    const navigate = useNavigate()
    return(
        <div className="sign-in">
            <img src={logo} className="logo"/>
            <div className="sign-in__container">
                <div className="sign-in__wrapper">
                    <h2 className="sign-in__title">Sign in</h2>
                    <Input type={inputData[1].type} placeholder={inputData[1].placeholder} title = {inputData[1].title}/>
                    <Input type={inputData[2].type} placeholder={inputData[2].placeholder} title = {inputData[2].title}/>
                    <Button text={"Sign in"}/>
                    <p className="sign-in__question">Don’t have an account?<button className="sign-in__link" onClick={()=>navigate("/sign-up")}> Sign up</button></p>
                </div>
            </div>
            <p className="sign-in__patent">© All Rights Reserved</p>
        </div>
    )
}