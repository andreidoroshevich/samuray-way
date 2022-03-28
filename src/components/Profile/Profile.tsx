import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {PostPropsType} from "./MyPosts/Post/Post";
import {addPost} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (text: string) => void

}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <div>
                <img src='https://www.encyclopedie-environnement.org/app/uploads/2020/11/couv_nature.jpg' alt='Logo'/>
            </div>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </>
    );
};

export default Profile;