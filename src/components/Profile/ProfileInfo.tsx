import React from 'react';
import Preloader from "../common/preloader/Preloader";

export type ProfileInfoType = {
    profile: any
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
                <img src={props.profile.photos.large}/>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.instagram}</div>
            </div>

        </>

    );
};

export default ProfileInfo;