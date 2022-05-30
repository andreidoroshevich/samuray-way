import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {compose} from "redux";


type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
}

type MapDispatchToPropsType = {
    // setAuthUserData: (userId: string | null, email: string | null, login: string | null) => void
    getAuthUserData: () => void
}

export type PropsType = mapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {

        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header headerValue={'Network Name'} {...this.props}/>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getAuthUserData, logout})
)(HeaderContainer)