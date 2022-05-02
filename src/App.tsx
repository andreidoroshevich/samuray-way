import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import classes from './components/Profile/Profile.module.css'
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props: any) => {

    return (
        <>
            <Header headerValue={'Network Name'}/>
            <div className={classes.main}>
                <Navbar/>
                <div className={classes.MainContent}>
                    <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/Profile" render={() => <ProfileContainer/>}/>
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
