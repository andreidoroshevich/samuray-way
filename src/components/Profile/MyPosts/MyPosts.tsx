import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (text: string) => void

}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(post => <Post id={post.id} message={post.message} avatar={post.avatar}
                                                    likeQuantity={post.likeQuantity}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.addPost(text)
        }
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