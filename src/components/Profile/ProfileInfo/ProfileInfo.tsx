import React from 'react';
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import styles from "../../Users/users.module.css";
import s from "./Profile.module.css";
import ProfileStatus from "../ProfileStatus";

// @ts-ignore
import userPhoto from "../../../assets/images/user-profile.png";

export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    } else
        return (
        <>
            <div className={s.profile}>
                <img alt={'ava'} className={styles.userPhoto} src={props.profile.photos.large !==null
                ? props.profile.photos.large
                    : userPhoto
                }/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <div className={s.userInfoBlock}>
                    <div> {props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>

                </div>
            </div>

        </>

    );
};

export default ProfileInfo;