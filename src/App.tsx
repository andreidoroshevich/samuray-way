import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import classes from './components/Profile/ProfileInfo/Profile.module.css'
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";

export type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type MapStateToPropsType = {
    initialized: boolean
}

const MapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized,
})


class App extends Component<MapDispatchToPropsType & MapStateToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }


    render() {

        if(!this.props.initialized){
        return <Preloader/>}

        return (
            <>
                <HeaderContainer/>
                <div className={classes.main}>
                    <Navbar/>
                    <div className={classes.MainContent}>
                        <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/Users" render={() => <UsersContainer/>}/>
                        <Route path="/News" render={() => <News/>}/>
                        <Route path="/Music" render={() => <Music/>}/>
                        <Route path="/Settings" render={() => <Settings/>}/>
                        <Route path="/Login" render={() => <Login/>}/>
                    </div>
                </div>
            </>
        );
    }
}


export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App)