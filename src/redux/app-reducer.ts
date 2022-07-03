import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean,
}

let initialState: InitialStateType = {
    initialized: false
}

type ActionsType = ReturnType<typeof initializedSuccess>

export const SET_INITIALIZED = "samurai-network/app/SET_INITIALIZED";


export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED,
    } as const
}


const appReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export default appReducer

export const initializeApp = () => {
    return ((dispatch: Dispatch) => {
        // @ts-ignore
       let pr =  dispatch(getAuthUserData())
       Promise.all([pr]).then(()=>{
           dispatch(initializedSuccess())
       })
    })
}

