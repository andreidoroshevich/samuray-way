import React from 'react';
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {ProfileType} from "../ProfileContainer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos:any)=>void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </>
    );
};

export default Profile;