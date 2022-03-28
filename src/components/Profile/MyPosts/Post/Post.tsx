import React from 'react';
import classes from './Post.module.css'
import {addPost} from "../../../../redux/state";

export type PostPropsType = {
    id: number
    message: string
    avatar: string
    likeQuantity: number
    // addPost: (message: string)=>void
}



const Post = (props: PostPropsType) => {
    return (
        <div className={classes.MainContent}>

                <div className={classes.item}>
                    <img src={props.avatar}/>
                    {props.message}
                    <div>like {props.likeQuantity}</div>
                </div>

            </div>

    );
};

export default Post;
