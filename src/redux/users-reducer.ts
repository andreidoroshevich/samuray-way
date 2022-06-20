import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type userObjType = {
    city: string,
    country: string
}

export type photoObjType = {
    small: string,
    large: string
}

export type UserType = {
    id: number,
    photos: photoObjType,
    followed: boolean,
    name: string,
    status: string,
    location: userObjType
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
}

export type UsersActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const FOLLOW = "samurai-network/users/FOLLOW";
export const UNFOLLOW = "samurai-network/users/UNFOLLOW";
export const SET_USERS = "samurai-network/users/SET_USERS";
export const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE";
export const SET_USERS_TOTAL_COUNT = "samurai-network/users/SET_USERS_TOTAL_COUNT";
export const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}

export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}

export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUsersCount: totalUsersCount
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    } as const
}

export const toggleFollowingProgress = (followingInProgress: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress: followingInProgress
    } as const
}

const usersReducer = (state = initialState, action: UsersActionsType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.followingInProgress}
        default:
            return state

    }
}

//ThunkCreator
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
}

//ThunkCreator
export const getOnPageChange = (pageNumber: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(setIsFetching(true))
    const data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
}

const followUnfollowFlow = async (dispatch: Dispatch, id:number, apiMethod: any, actionCreator: any ) => {
    dispatch(toggleFollowingProgress(true))
    const data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false))
}



//ThunkCreator
export const unfollow = (id: number) =>{
    return (dispatch: Dispatch) => {
        const apiMethod = usersAPI.unfollowSuccess.bind(usersAPI)
        const actionCreator = unfollowSuccess
        followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
    }
}

export const follow = (id: number) => async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.followSuccess.bind(usersAPI)
    const actionCreator = followSuccess
    followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}

export default usersReducer;