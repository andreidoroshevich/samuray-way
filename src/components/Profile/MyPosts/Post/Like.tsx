import React from 'react';
import classes from './Post.module.css'


type LikePropsType = {
    likeQuantity: number
}


const Like = (props: LikePropsType) => {
    return (
        <div className={classes.item}><span>{props.likeQuantity} likes</span></div>

    );
};


export default Like;