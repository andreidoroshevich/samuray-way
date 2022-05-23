import React from 'react';
import s from "./FormStyle.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={"input"}/>
            </div>
            <div className={s.checkText}>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h3 className={s.h3}>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login
