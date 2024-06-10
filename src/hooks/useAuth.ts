import { useContext } from "react";
import { IAuthContext } from "../types/types";
import { AuthContext } from "./authProvider";

export function useAuth() {
    return useContext(AuthContext) as IAuthContext;
  }