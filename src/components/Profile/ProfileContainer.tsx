import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/posts-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

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

export type MapStateType = {
    profile: ProfileType
}

export type MapDispatchType = {
    setUserProfile: (profile: ProfileType)=>void
}

export type PathParamsType = {
    userId: number
}


// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & MapDispatchType & MapStateType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        );

    }
}

let mapStateToProps = (state:RootState) : MapStateType =>({
    profile:state.posts.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer) //оборачиаем в контейнерный компонент

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);