import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {PostPropsType} from "./MyPosts/Post/Post";

type ProfilePropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: any) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <div>
                <img src='https://www.encyclopedie-environnement.org/app/uploads/2020/11/couv_nature.jpg' alt='Logo'/>
            </div>
            <MyPosts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>
        </>
    );
};

export default Profile;