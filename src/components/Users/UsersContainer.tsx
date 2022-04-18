import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapDispatchPropsType = {
    follow: (userId:number)=>void,
    unfollow: (userId:number)=>void,
    setUsers: (users: any)=>void
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
        setUsers: (users: any) =>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)