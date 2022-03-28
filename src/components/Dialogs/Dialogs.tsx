import React from 'react';
import classes from './Dialogs.module.css';
import Dialog, {DialogPropsType} from "./Dialog/Dialog";
import Message, { MessagePropsType } from "./Message/Message";



const Dialogs = (props: { dialogs: Array<DialogPropsType>; messages: Array<MessagePropsType>; }) => {

    let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(message => <Message message={message.message} id={message.id}/>)



    return (
        <div className={classes.dialogs}>

            <div className={classes.dialog_items}>
                {dialogsElements}
            </div>

             <div className={classes.messages}>
                 {messagesElements}
             </div>
        </div>
    );
};

export default Dialogs;