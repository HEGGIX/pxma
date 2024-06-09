import "./activation.scss"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { activateUser } from "../../store/userSlice"

export const Activation = () => {
    const activation=useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(activateUser(activation))
    },[])
    return(
        <div>
            <button>Clc</button>
        </div>
    )
}