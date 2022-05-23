import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileType
}


const Profile = (props: ProfilePropsType) => {


    return (
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;