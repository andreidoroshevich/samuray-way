import React from 'react';
import Profile from "./ProfileInfo/Profile";
import {RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/posts-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
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
            userId = 23481
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        // usersAPI.getUserProfile(userId).then(data => {
        //     this.props.setUserProfile(data)
        // })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </>
        );

    }
}

let mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.posts.profile,
    status: state.posts.status

})


// const AuthRedirectComponent = (props: any)=>{
//     if (!props.isAuth) return <Redirect to={'/Login'}/>
//     return <ProfileContainer {...props} />
// }

// const WithUrlDataContainerComponent = withRouter(ProfileContainer) //оборачиаем в контейнерный компонент

// export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>(mapStateToProps,
//     {getUserProfile})(WithUrlDataContainerComponent));

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)