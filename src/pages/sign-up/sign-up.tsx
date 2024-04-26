import { Input } from "../../ui-components/input/input"
import { Button } from "../../ui-components/button/button"
import { inputData } from "../../ui-components/input/data-input"
import { useNavigate } from "react-router-dom"
import logo from "./pixema.png"

import "./sign-up.scss"


export const SignUp = () => {
    const navigate = useNavigate()
    return(
        <>
        <div className="sign-up">
            <img src={logo} className="logo"/>
            <div className="sign-up__container">
                <div className="sign-up__wrapper">
                    <h2 className="sign-up__title">Sign Up</h2>
                    <Input type={inputData[0].type} placeholder={inputData[0].placeholder} title = {inputData[0].title}/>
                    <Input type={inputData[1].type} placeholder={inputData[1].placeholder} title = {inputData[1].title}/>
                    <Input type={inputData[2].type} placeholder={inputData[2].placeholder} title = {inputData[2].title}/>
                    <Input type={inputData[3].type} placeholder={inputData[3].placeholder} title = {inputData[3].title}/>
                    <Button text={"Sign up"}/>
                    <p className="sign-up__question">Already have an account?<button className="sign-up__link" onClick={()=>navigate("/sign-in")}> Sign in</button></p>
                </div>
            </div>
            <p className="sign-up__patent">© All Rights Reserved</p>
        </div>
        </>
    )
}