import styles from "../../Users/users.module.css";
import React from "react";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    facebook: string
    github: string,
    instagram: string
    mainLink: string | null,
    twitter: string
    vk: string
    website: string | null,
    youtube: string | null
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = ({initialValues, handleSubmit, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <button onClick={() => {
                }}>save profile
                </button>
            </div>


            <div className={styles.info}><b>Full name:</b>
                {createField('Full name', 'fullName', [], Input)}
            </div>
            <div className={styles.info}><b>About me:</b>
                {createField('About me', 'aboutMe', [], Input)}
            </div>
            <div className={styles.info}><b>Looking for a job:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div className={styles.info}><b>My skills:</b>
                {createField('LookingForAJobDescription', 'lookingForAJobDescription', [], Input)}
            </div>

            <div className={styles.info}><b>Contacts:</b>
                <div className={styles.info}><b>Facebook:</b>
                    {createField('facebook', 'contacts.' + 'facebook', [], Input)}
                </div>

                <div className={styles.info}><b>website:</b>
                    {createField('website', 'contacts.' + 'website', [], Input)}
                </div>

                <div className={styles.info}><b>vk:</b>
                    {createField('vk', 'contacts.' + 'vk', [], Input)}
                </div>
                <div className={styles.info}><b>twitter:</b>
                    {createField('twitter', 'contacts.' + 'twitter', [], Input)}
                </div>
                <div className={styles.info}><b>instagram:</b>
                    {createField('instagram', 'contacts.' + 'instagram', [], Input)}
                </div>
                <div className={styles.info}><b>youtube:</b>
                    {createField('youtube', 'contacts.' + 'youtube', [], Input)}
                </div>
                <div className={styles.info}><b>github:</b>
                    {createField('github', 'contacts.' + 'github', [], Input)}
                </div>

                <div className={styles.info}><b>mainLink:</b>
                    {createField('mainLink', 'contacts.' + 'mainLink', [], Input)}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm