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

type ActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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

const usersReducer = (state = initialState, action: ActionsType) => {

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
export const getUsers = (currentPage: number, pageSize: number) => {
    return ((dispatch: Dispatch) => {

        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    })
}

//ThunkCreator
export const getOnPageChange = (pageNumber: number, pageSize: number) => {
    return ((dispatch: Dispatch) => {

        dispatch(setCurrentPage(pageNumber))
       dispatch(setIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
        })
    })
}

//ThunkCreator
export const unfollow = (id: number) => {
    return ((dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true))
        usersAPI.unfollowSuccess(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingProgress(false))
        })
    })
}

export const follow = (id: number) => {
    return ((dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true))

        usersAPI.followSuccess(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingProgress(false))
        })
    })
}


export default usersReducer;