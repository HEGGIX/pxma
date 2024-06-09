import React from "react"; 
import { IAuthContext } from "../types/types";

export const FiltersContext = React.createContext({})
export const UserContext = React.createContext({})
export const ThemeContext = React.createContext({})
export const AuthContext = React.createContext(<IAuthContext | null>(null));
export const ExitContext = React.createContext({})
