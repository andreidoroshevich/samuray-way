import React from 'react';
import classes from './Dialogs.module.css';
import Dialog, {DialogPropsType} from "./Dialog/Dialog";
import Message, {MessagePropsType} from "./Message/Message";
import {AddMessageFormRedux} from "./AddMessageForm";


type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.messages.map(message => <Message key={message.id} message={message.message}
                                                                    id={message.id}/>)

    const addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody)
        console.log({values})
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialog_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>
        </div>
    );
};



export default Dialogs;