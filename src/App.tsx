import React, {Component, ReactNode} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import classes from './components/Profile/ProfileInfo/Profile.module.css'
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import store, {RootState} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";
import Footer from "./components/Footer/Footer";
import {withSuspense} from "./hoc/WithSuspense";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/login/Login'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer"'))

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

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <>
                <HeaderContainer/>
                <div className={classes.main}>
                    <Navbar/>
                    <div className={classes.MainContent}>
                        <Route path="/Dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/Users" render={withSuspense(UsersContainer)}/>
                        <Route path="/News" render={() => <News/>}/>
                        <Route path="/Music" render={() => <Music/>}/>
                        <Route path="/Settings" render={() => <Settings/>}/>
                        <Route path="/Login" render={withSuspense(Login)}/>
                    </div>
                </div>
                <Footer footerValue={"All rights reserved, 2022"}/>
            </>
        );
    }
}

compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App)

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App)

export const SamuraiJSApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
export default SamuraiJSApp