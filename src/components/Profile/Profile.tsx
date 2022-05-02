import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

type ProfileType = {
    profile: any
}


const Profile = (props: ProfileType) => {
    return (
        <>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </>
    );
};

export default Profile;