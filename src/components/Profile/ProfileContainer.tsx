import React from 'react';
import Profile from "./ProfileInfo/Profile";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/posts-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getIsAuth, getProfile, getStateStatus, getUserId} from "../../redux/profile-selectors";

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number | null
    status: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (photos: any)=>void
}

export type PathParamsType = {
    userId: number | null
    isOwner: boolean
}

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & MapDispatchToPropsType & MapStateToPropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                />
            </>
        );

    }
}

let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStateStatus(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state),
})

// let mapStateToProps = (state: RootState): MapStateToPropsType => ({
//     profile: state.posts.profile,
//     status: state.posts.status,
//     authorizedUserId: state.auth.userId,
//     isAuth: state.auth.isAuth
// })

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)