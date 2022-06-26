import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import {ActionType} from "../../../redux/redux-store";
import {reduxForm} from "redux-form";
import {AddNewPostForm} from "./AddNewPostForm";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText: string) => void
    dispatch?: (action: ActionType) => void
}


const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postElement = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                    avatar={post.avatar}
                                                    likeQuantity={post.likeQuantity}/>)

    const addPost = (values: any) => {
        console.log({values})
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.MainContent}>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div>New posts</div>
            {postElement}
        </div>
    );
});

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;