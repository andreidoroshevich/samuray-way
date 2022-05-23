import React from 'react';
import classes from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    avatar: string
    likeQuantity: number
}



const Post = (props: PostPropsType) => {
    return (
        <div className={classes.MainContent}>

                <div className={classes.item}>
                    <img alt={'avatar'} src={props.avatar}/>
                    {props.message}
                    <div>like {props.likeQuantity}</div>
                </div>

            </div>

    );
};

export default Post;
