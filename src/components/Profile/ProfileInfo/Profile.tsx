import React from 'react';
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";
import {PhotosType, ProfileType} from "../ProfileContainer";
import {ProfileDataFormType} from "./ProfileDataForm";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos:PhotosType)=>void
    saveProfile: (data: ProfileDataFormType) => void
    error: string
}


const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         error={props.error}
            />
            <MyPostsContainer/>
        </>
    );
};

export default Profile;