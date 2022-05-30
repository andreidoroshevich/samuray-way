import {Field, InjectedFormProps} from "redux-form";
import React from "react";

export const AddMessageForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={"textarea"} name={"newMessageBody"} placeholder={'Enter your message'}/>

                </div>
                <div>
                    <button>Send
                    </button>
                </div>
            </div>

        </form>
    )
}