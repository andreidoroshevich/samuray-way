import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import {ActionType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    updateNewPostText: (text:string)=>void
    addPost: ()=>void
    dispatch?: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} avatar={post.avatar}
                                                    likeQuantity={post.likeQuantity}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = ()=>{
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
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