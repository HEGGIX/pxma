import "./exitTab.scss"
import { useContext, useState } from "react"
import { ExitContext } from "../../context/context"
import { ReactComponent as Close } from "../../assets/close.svg";
import { useNavigate } from "react-router-dom";


export const ExitTab = () => {
    const exitContext = useContext(ExitContext)
    const navigate = useNavigate()
    return(
        <div className={!exitContext.exitMenu?"exit-tab":"exit-tab active"}>
            <div className="exit-tab__wrapper">
                <button className="exit-tab__title-btn" onClick={() => exitContext?.setExitMenu(!exitContext.exitMenu)}><Close/></button>
                <h2 className="exit-tab__title">Login to your account</h2>
                <div className="exit-tab__btn-container">
                    <button className="exit-tab__btn" onClick={()=>navigate("/sign-in")}>Sign in</button>
                    <button className="exit-tab__btn" onClick={()=>navigate("/sign-up")}>Sign up</button>
                </div>
            </div>
        </div>
    )
}