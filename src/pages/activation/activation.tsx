import "./activation.scss"
import logo from "../sign-up/pixema.png"
import { useParams,useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { activateUser } from "../../store/userSlice"
import { Button } from "../../ui-components/button/button"

export const Activation = () => {
    const activation=useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(activateUser(activation))
    },[])
    return(
            <>
            <div className="activation">
                <img src={logo} className="logo"/>
                <div className="activation-container">
                    <div className="activation-wrapper">
                        <h2 className="activation-title">Activation your account</h2>
                        <p className="activation-text">Your account is activated!</p>
                        <button className = "activation-btn" onClick={() => navigate("/")}>Home page</button>
                    </div>
                </div>
                <p className="activation-patent">© All Rights Reserved</p>
            </div>
            </>
    )
}