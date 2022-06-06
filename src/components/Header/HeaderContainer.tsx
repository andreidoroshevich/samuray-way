import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";


type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
}

// type MapDispatchToPropsType = {
//     // setAuthUserData: (userId: string | null, email: string | null, login: string | null) => void
//     getAuthUserData: () => void
// }

export type PropsType = mapStateToPropsType

class HeaderContainer extends React.Component<PropsType> {

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
    connect(mapStateToProps, {logout})
)(HeaderContainer)