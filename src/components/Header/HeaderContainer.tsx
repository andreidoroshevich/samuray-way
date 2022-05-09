import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";


type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: string | null, email: string | null, login: string | null)=>void
}

export type PropsType = mapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
            usersAPI.getLogin().then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);