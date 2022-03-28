import React from 'react';
import classes from "../Dialogs.module.css";

export type MessagePropsType = {
    message: string
    id: number
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>

    );
};

export default Message;