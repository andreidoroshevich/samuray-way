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
}

let initialState: InitialStateType = {
    users: [
        // {id: 1, userPhotoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU', followed: true, fullName:'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, userPhotoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU', followed: false, fullName:'Andrey', status: 'I am cool', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, userPhotoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU', followed: false, fullName:'Maxim', status: 'Life is good', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 4, userPhotoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU', followed: true, fullName:'Vadim', status: 'The best of the best', location: {city: 'Boston', country: 'US'}},
        // {id: 5, userPhotoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2pG4LmrRGPh-6htiEVO7q0KsgZSA-bqJKQ&usqp=CAU', followed: true, fullName:'Sasha', status: 'Life is pain', location: {city: 'London', country: 'GB'}},
    ]
}

type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

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
const usersReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case "FOLLOW":
        return {...state,
            users: state.users.map(u=>u.id===action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state,
                users: state.users.map(u=>u.id===action.userId ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state,
                users: [...state.users, ...action.users]}

        default:
            return state

    }
}

    export default usersReducer;