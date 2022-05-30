import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type ActionsType = ReturnType<typeof setAuthUserData>

export const SET_USER_DATA = "SET_USER_DATA";


export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}


const authReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default authReducer;

export const getAuthUserData = () => {
    return ((dispatch: Dispatch) => {
        authAPI.getLogin().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return ((dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    })
}

export const logout = () => {
    return ((dispatch: Dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    })
}