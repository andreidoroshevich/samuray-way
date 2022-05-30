import React from "react"
import {WrappedFieldProps} from "redux-form";
import s from "./formsControls.module.css"

const FormControl: React.FC<WrappedFieldProps> = ({meta, children})=>{
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={hasError ? s.error : ""}>
                {children}
            </div>
            <div className={s.error}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta}) => {
    return (
        <FormControl input={input} meta={meta}>
            <textarea {...input}/>
        </FormControl>
    )
}

    export const Input: React.FC<WrappedFieldProps> = ({input, meta}) =>{
        return (
            <FormControl input={input} meta={meta}>
                <input {...input}/>
            </FormControl>
        )
    }

