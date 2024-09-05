import React, { createContext, useReducer, useMemo, useContext, useEffect, useState } from "react";
import axiosInstance from "../helpers/axios-client";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer, { initialState, RESTORE_TOKEN, SIGNIN, SIGNOUT, User} from "../reducers/AuthReducer";
import AppNavigation from "../presentation/navigations/AppNavigation";

export const USER_TOKEN_KEY = 'userToken' 
export const USER_KEY ='user'

interface AuthContextType {
    handleLogin: ( token: string,  user: User ) => void;
    handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = () => {

    const [ state , dispatch ] = useReducer(AuthReducer, initialState)

    useEffect(() => {
        const bootstrapAsync = async() => {
            let userToken;

            try{
                userToken ? userToken = await AsyncStorage.getItem(USER_TOKEN_KEY) : null
            }catch(e: any){
                alert('Token invalid ' + e.message )
            }

            dispatch({
                type: RESTORE_TOKEN,
                token: userToken! 
            })
        }
        bootstrapAsync().then(() => {})
    }, [])

    const handleLogin = async( token: string, user: User ) => {
        try {
            dispatch({ type: SIGNIN, token, user })
        } catch (error: any) {
            throw new Error(error)
        }
    }

    const handleLogout = async() => {
        try {
            delete axiosInstance.defaults.headers.common['Authorization'];
        } catch (error: any) {
            throw new Error(error)
        }finally{
            dispatch({ type: SIGNOUT })
        }
    }

    const authContext = useMemo(() => {
        return {
            state, handleLogin, handleLogout
        }
    }, [state])

    return(
        <AuthContext.Provider value={authContext}>
            <AppNavigation userToken={state.userToken!}/>
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }

function alert(arg0: string) {
    throw new Error("Function not implemented.");
}
