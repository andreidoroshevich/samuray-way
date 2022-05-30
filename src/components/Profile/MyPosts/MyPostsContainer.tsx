import React from 'react';
import {PostPropsType} from "./Post/Post";
import {addPostActionCreator} from "../../../redux/posts-reducer";
import {RootState} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


export type MapPostsDispatchPropsType = {
    addPost: (newPostText: string)=>void,
}

export type MapStateToPropsType = {
    posts: Array<PostPropsType>,
}

const mapStateToProps = (state: RootState)=>{
    return {
        posts: state.posts.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapPostsDispatchPropsType=>{
    return {
        addPost: (newPostText: string)=>{
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts)