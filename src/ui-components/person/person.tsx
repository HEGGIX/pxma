import "./person.scss"
import "./personMedia.scss"
import {ReactComponent as Arrow} from "../../assets/person-arrow.svg"
import { useContext, useEffect } from "react"
import { ExitContext, ThemeContext } from "../../context/context"
import { useSelector,useDispatch } from "react-redux"
import { getUserInfo } from "../../store/userSlice"

export const Person = () => {
    const {username} = useSelector((state)=>state.user.user)
    const themeContext = useContext(ThemeContext)
    const exitContext = useContext(ExitContext)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserInfo())
      },[])
    return(
        <div className="person-btn__container">
            <div className="person-btn__laters">
                <p>{username.split(" ").map(word => /[a-zа-яё]/i.test(word[0]) ? word[0] : "").join("").toUpperCase()}</p>
            </div>
            <p className={themeContext.themeIsActive === false ? "person-btn__name" : "person-btn__name white"}>{username}</p>
            <button className = "person-btn" onClick = {() => exitContext?.setExitMenu(!exitContext.exitMenu)}><Arrow/></button>
        </div>
    )
}