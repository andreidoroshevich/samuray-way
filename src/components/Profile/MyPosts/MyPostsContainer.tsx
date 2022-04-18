import React from 'react';
import {PostPropsType} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/posts-reducer";
import {ActionType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

export type MyPostsContainerPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const onAddPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (text:string)=>{
        let action = updateNewPostTextCreator(text)
            props.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} posts={props.posts} newPostText={props.newPostText}/>
    );
};

export default MyPostsContainer;