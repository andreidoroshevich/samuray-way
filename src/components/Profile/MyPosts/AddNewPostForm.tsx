import {Field, InjectedFormProps} from "redux-form";
import React from "react";

export const AddNewPostForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>My posts
                <div>
                    <Field component={"textarea"} name={"newPostText"}/>
                    <div>
                        <button>Add Post
                        </button>
                    </div>
                </div>

            </div>
        </form>
    )
}