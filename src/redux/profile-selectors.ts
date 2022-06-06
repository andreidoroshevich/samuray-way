import {RootState} from "./redux-store";

export const getProfile=(state: RootState) =>{
    return state.posts.profile
}

export const getStateStatus=(state: RootState) =>{
    return state.posts.status
}

export const getUserId=(state: RootState) =>{
    return state.auth.userId
}

export const getIsAuth=(state: RootState) =>{
    return state.auth.isAuth
}

