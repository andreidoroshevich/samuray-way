import React from 'react';
import {PostPropsType} from "./Post/Post";
import {addPostActionCreator} from "../../../redux/posts-reducer";
import {RootState} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


export type MapPostsDispatchPropsType = {
    addPost: (newPostText: string)=>void,
    // updateNewPostText: (text: string)=>void
}

export type MapStateToPropsType = {
    posts: Array<PostPropsType>,
    // newPostText: string
}

const mapStateToProps = (state: RootState)=>{
    return {
        posts: state.posts.posts,
        // newPostText: state.posts.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapPostsDispatchPropsType=>{
    return {
        addPost: (newPostText: string)=>{
            dispatch(addPostActionCreator(newPostText))
        },
    // updateNewPostText: (text: string)=>{
    //     dispatch(updateNewPostTextCreator(text))
    //
    //     }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts)