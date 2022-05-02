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
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

type ActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE= "SET_CURRENT_PAGE";
export const SET_USERS_TOTAL_COUNT= "SET_USERS_TOTAL_COUNT";

export const followAC = (userId:number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}

export const unfollowAC = (userId:number) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}

export const setUsersAC = (users:Array<UserType>) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}

export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalUsersCount: totalUsersCount
    } as const
}



const usersReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW:
        return {...state,
            users: state.users.map(u=>u.id===action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state,
                users: state.users.map(u=>u.id===action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        default:
            return state

    }
}

    export default usersReducer;