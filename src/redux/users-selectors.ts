import {RootState} from "./redux-store";


export const requestUsers=(state: RootState) =>{
    return state.usersPage.users
}

export const getPageSize=(state: RootState) =>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount=(state: RootState) =>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage=(state: RootState) =>{
    return state.usersPage.currentPage
}

export const getIsFetching=(state: RootState) =>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress=(state: RootState) =>{
    return state.usersPage.followingInProgress
}

