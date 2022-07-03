import React from 'react';
import Profile from "./ProfileInfo/Profile";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/posts-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getIsAuth, getProfile, getStateStatus, getUserId} from "../../redux/profile-selectors";
import {ProfileDataFormType} from "./ProfileInfo/ProfileDataForm";

export type ContactsType = {
    facebook: string
    github: string,
    instagram: string
    mainLink: string | null,
    twitter: string
    vk: string
    website: string | null,
    youtube: string | null
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    status: string
    aboutMe: string
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
    error: string
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (photos: PhotosType) => void
    saveProfile: (data: ProfileDataFormType) => void
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
                         saveProfile={this.props.saveProfile}
                         error={this.props.error}
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
    error: state.posts.error,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)