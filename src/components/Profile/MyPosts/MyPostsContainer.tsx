import React from 'react';
import {PostPropsType} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/posts-reducer";
import {RootState} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type MapPostsDispatchPropsType = {
    addPost: ()=>void,
    updateNewPostText: (text: string)=>void
}

type MapStateToPropsType = {
    posts: Array<PostPropsType>,
    newPostText: string
}

const mapStateToProps = (state: RootState)=>{
    return {
        posts: state.posts.posts,
        newPostText: state.posts.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapPostsDispatchPropsType=>{
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
    updateNewPostText: (text: string)=>{
        dispatch(updateNewPostTextCreator(text))

        }
    }
}

export default connect<MapStateToPropsType, MapPostsDispatchPropsType, {}, RootState>(mapStateToProps,mapDispatchToProps)(MyPosts)