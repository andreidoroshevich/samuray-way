import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/posts-reducer";
import {ActionType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(post => <Post id={post.id} message={post.message} avatar={post.avatar}
                                                    likeQuantity={post.likeQuantity}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(addPostActionCreator())
        }
    }

    const onPostChange = ()=>{
        let text = newPostElement.current?.value
        if (text) {
            // props.dispatch({type: "APDATE-NEW-POST-TEXT", newText: text})
            props.dispatch(updateNewPostTextCreator(text))
        }
    }

    return (
        <div className={classes.MainContent}>


            <div>My posts
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    <div>
                        <button onClick={addPost}>Add Post
                        </button>
                    </div>
                </div>
                <div>New posts</div>
                {postElement}

            </div>

        </div>
    );
};

export default MyPosts;