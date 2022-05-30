import {Field, InjectedFormProps} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export const AddNewPostForm = (props: InjectedFormProps) => {

    const maxLength10 = maxLengthCreator(10)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>My posts<div>
                    <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]}/>
                    <div>
                        <button>Add Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}