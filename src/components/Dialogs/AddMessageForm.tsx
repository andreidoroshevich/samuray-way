import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLengthCreator50 = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} validate={[required, maxLengthCreator50]} name={"newMessageBody"} placeholder={'Enter your message'}/>

                </div>
                <div>
                    <button>Send
                    </button>
                </div>
            </div>

        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
