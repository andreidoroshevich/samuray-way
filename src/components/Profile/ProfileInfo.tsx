import React from 'react';
import Preloader from "../common/preloader/Preloader";
import {ProfileType} from "./ProfileContainer";
import styles from "../Users/users.module.css";
import s from "../Profile/Profile.module.css";

// @ts-ignore
import userPhoto from "../../assets/images/user-profile.png";

export type ProfileInfoType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    } else
        return (
        <>
            <div>

                <img src='https://www.encyclopedie-environnement.org/app/uploads/2020/11/couv_nature.jpg' alt='Logo'/>

            </div>
            <div>
                <img alt={'ava'} className={styles.userPhoto} src={props.profile.photos.large !==null
                ? props.profile.photos.large
                    : userPhoto
                }/>
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