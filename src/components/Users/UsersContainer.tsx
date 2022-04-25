import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapDispatchPropsType = {
    follow: (userId:number)=>void,
    unfollow: (userId:number)=>void,
    setUsers: (users: Array<UserType>)=>void
}

const mapStateToProps = (state: RootState) => {
    return{
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType=>{
    return {
        follow: (userId:number) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) =>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)