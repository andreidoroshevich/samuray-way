import React from 'react';
import Profile from "./Profile";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/posts-reducer";

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
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type PathParamsType = {
    userId: number
}


// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & MapDispatchToPropsType & MapStateToPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        // usersAPI.getUserProfile(userId).then(data => {
        //     this.props.setUserProfile(data)
        // })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        );

    }
}

let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.posts.profile,
    isAuth: state.auth.isAuth,
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer) //оборачиаем в контейнерный компонент

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);