import React, {useState} from 'react';
import Preloader from "../../common/preloader/Preloader";
import {PhotosType, ProfileType} from "../ProfileContainer";
import styles from "../../Users/users.module.css";
import s from "./Profile.module.css";
// @ts-ignore
import userPhoto from "../../../assets/images/user-profile.png";
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import ProfileDataForm, {ProfileDataFormType} from "./ProfileDataForm";

export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photos: PhotosType) => void
    saveProfile: (data: ProfileDataFormType) => void
    isOwner: boolean
    error: string
}


const ProfileInfo = (props: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event: any) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return (
        <>

            <div className={s.profile}>
                {props.profile.photos
                    ? <img alt={'ava'} className={styles.userPhoto} src={props.profile.photos.large}/>
                    : <img alt={'ava'} className={styles.userPhoto} src={userPhoto}/>
                }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}  error={props.error} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}

            </div>

        </>

    );
};

export default ProfileInfo;


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
    error: string
}

const ProfileData = (props: ProfileDataType) => {
    return (
        <>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit profile</button>
            </div>}
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div className={styles.info}><b>Full name:</b> {props.profile.fullName}</div>
            <div className={styles.info}><b>About me:</b> {props.profile.aboutMe}</div>
            <div className={styles.info}><b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div className={styles.info}><b>My skills:</b> {props.profile.lookingForAJobDescription}</div>

            {Object.keys(props.profile).length > 0 && (<div>
                <div className={styles.info}>
                    <b>Contacts:</b>{Object.keys(props.profile.contacts).map((key: string, id: number) => {
                    // @ts-ignore
                    return <Contact key={id} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
                </div>
            </div>)}
        </>
    )
}


type PropsType = {
    contactTitle: string
    contactValue?: string | null
}

export const Contact = (props: PropsType) => {
    return <div className={styles.infoContacts}><b>{props.contactTitle}: </b> {props.contactValue}</div>

}