import {Field, InjectedFormProps} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm = (props: InjectedFormProps) => {

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