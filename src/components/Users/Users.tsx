import React from "react";
// @ts-ignore
import userPhoto from "../../assets/images/user-profile.png";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

export type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number
    currentPage: number
    totalUsersCount: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void
    followingInProgress: boolean
}


const Users = (props: UsersPropsType) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}
            />
            {
                props.users.map(u =>
                    <User user={u}
                          key={u.id}
                          follow={props.follow}
                          unfollow={props.unfollow}
                          followingInProgress={props.followingInProgress}
                    />
                )
            }
        </div>
    )

}

export default Users