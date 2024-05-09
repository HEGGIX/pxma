import "./button.scss"
import { createUser } from "../../store/userSlice"
import { useState } from "react"
import { inputData } from "../input/data-input"
import { Input } from "../input/input"
import { useDispatch } from "react-redux"

export const Button = ({text}:{text:string}) => {
    const [user, setUser] = useState({
        "username": ,
        "email": ,
        "password": ,
        "course_group": 7
    })
    const dispatch = useDispatch();
    const handler = () => {
        dispatch(createUser(user))
      };
    
      useEffect(() => {
        dispatch(fetchTodos());
      }, []);
    
    return(
        <button className="button" onClick={() => }>{text}</button>
    )
}