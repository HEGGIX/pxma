import { useContext } from "react";
import { IAuthContext } from "../types/types";
import { AuthContext } from "../context/context";

export function useAuth() {
    return useContext(AuthContext) as IAuthContext;
  }