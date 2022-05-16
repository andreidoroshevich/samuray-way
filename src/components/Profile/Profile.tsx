import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";


type ProfilePropsType = {
    profile: ProfileType
    isAuth: boolean
}


const Profile = (props: ProfilePropsType) => {

    if (!props.isAuth) {
        return <Redirect to={'/Login'}/>
    }

    return (
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;