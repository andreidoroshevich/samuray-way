import React from 'react';
import s from "./FormStyle.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootState} from "../../redux/redux-store";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    email: string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field placeholder={"Login"} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={'password'} name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div className={s.checkText}>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
            </>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = ({...props}) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h3 className={s.h3}>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, {login})(Login)
