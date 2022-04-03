import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import classes from './components/Profile/Profile.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {DialogPropsType} from "./components/Dialogs/Dialog/Dialog";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {ActionType} from "./redux/state";

type AppPropsType = {
    posts: Array<PostPropsType>;
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (text: string) => void
    dispatch: (action: ActionType) => void

}

const App = (props: AppPropsType) => {

    return (

        <>
            <Header headerValue={'Network Name'}/>
            <div className={classes.main}>
                <Navbar/>
                <div className={classes.MainContent}>

                    <Route path="/Dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/Profile" render={() => <Profile posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>


                </div>

            </div>
        </>


    );


}


export default App;
