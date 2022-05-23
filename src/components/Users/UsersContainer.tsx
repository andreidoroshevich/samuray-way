import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    getOnPageChange, getUsers,
    setCurrentPage,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {RootState} from "../../redux/redux-store";
// @ts-ignore
import Users from "./Users";
import styles from "./users.module.css";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number)=>void
    getOnPageChange: (pageNumber: number, pageSize: number)=>void
}

export type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: boolean
}


class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setUsersTotalCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getOnPageChange(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.setIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {

        return (
            <>
                <div className={styles.preload}>{this.props.isFetching ? <Preloader/> : null}</div>
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                />

            </>)
    }
}


const mapStateToProps = (state: RootState) : MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType=>{
//     return {
//         follow: (userId:number) =>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId:number) =>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) =>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setUsersTotalCount: (totalCount: number)=>{
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         setIsFetching: (isFetching: boolean)=>{
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//     }
// }

// export default connect(mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setUsers: setUsers,
//     setCurrentPage: setCurrentPage,
//     setUsersTotalCount: setUsersTotalCount,
//     setIsFetching: setIsFetching
// })(UsersContainer)

// export default connect<MapStateToPropsType, MapDispatchPropsType, {},  RootState>(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     getUsers,
//     getOnPageChange,
// })(UsersContainer)

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {},  RootState>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
        getOnPageChange,
    }),
        withAuthRedirect
)(UsersContainer)