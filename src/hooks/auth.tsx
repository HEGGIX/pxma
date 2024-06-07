import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import { IChildren } from "../types/types";



const Auth = ({ children }: IChildren) => {
    const location=useLocation()
  
    const { isAuth } = useAuth() || {};
    if (isAuth.email) {
        return (
            <Navigate to={"/sign-in"} state={{from:location}}/>
        );
    }
    return children;
};
export default Auth;
