import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";


type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootState):mapStateToPropsType =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component:ComponentType<T>) {

const RedirectComponent = (props:mapStateToPropsType)=>{
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/Login'}/>
    return <Component {...restProps as T}/>

    }
    return connect(mapStateToProps)(RedirectComponent)
}