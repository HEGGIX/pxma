import logo from "../sign-up/pixema.png"
import "./confirmation.scss"
import { Button } from "../../ui-components/button/button"

export const Confirmation = () => {
    return(
        <>
        <div className="confirmation">
            <img src={logo} className="logo"/>
            <div className="confirmation-container">
                <div className="confirmation-wrapper">
                    <h2 className="confirmation-title">Registration confirmation</h2>
                    <p className="confirmation-text">
                        Thank you for registering! To activate your account, go to your email and click the "Confirm" button.
                    </p>
                    <Button text="Go to authorize" onClick={() => console.log("autorize")}/>
                </div>
            </div>
            <p className="confirmation-patent">© All Rights Reserved</p>
        </div>
        </>
    )
}