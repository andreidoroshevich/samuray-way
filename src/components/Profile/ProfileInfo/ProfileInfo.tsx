import React from 'react';
import Preloader from "../../common/preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import styles from "../../Users/users.module.css";
import s from "./Profile.module.css";
// @ts-ignore
import userPhoto from "../../../assets/images/user-profile.png";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";

export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photos:any)=>void
    isOwner: boolean
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }

      const onMainPhotoSelected=(event: any)=>{
        if(event.target.files.length){
        props.savePhoto(event.target.files[0])
    }
      }


        return (
        <>
            <div className={s.profile}>
                { props.profile.photos.small
                    ? <img alt={'ava'} className={styles.userPhoto} src={props.profile.photos.large}/>
                    : <img alt={'ava'} className={styles.userPhoto} src={userPhoto}/>
                }
                <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>

        </>

    );
};

export default ProfileInfo;