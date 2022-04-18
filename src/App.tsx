import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import classes from './components/Profile/Profile.module.css'
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostPropsType} from "./components/Profile/MyPosts/Post/Post";
import {ActionType} from "./redux/redux-store";
import {DialogPropsType} from "./components/Dialogs/Dialog/Dialog";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {
    posts: Array<PostPropsType>;
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newPostText: string
    dispatch: (action: ActionType) => void
    newMessageBody: string
}

const App = (props: AppPropsType) => {

    return (

        <>
            <Header headerValue={'Network Name'}/>
            <div className={classes.main}>
                <Navbar/>
                <div className={classes.MainContent}>

                    <Route path="/Dialogs" render={() => <DialogsContainer dialogs={props.dialogs} dispatch={props.dispatch} messages={props.messages} newMessageBody={props.newMessageBody}/>}/>
                    <Route path="/Profile" render={() => <Profile posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText}/>}/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>


                </div>

            </div>
        </>


    );


}


export default App;
