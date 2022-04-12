import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import Dialog, {DialogPropsType} from "./Dialog/Dialog";
import Message, {MessagePropsType} from "./Message/Message";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import {PostPropsType} from "../Profile/MyPosts/Post/Post";
import {ActionType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    dispatch: (action: ActionType) => void
}


const DialogsContainer = (props:DialogsPropsType) => {

    // const dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    // const messagesElements = props.messages.map(message => <Message message={message.message} id={message.id}/>)
    // const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())


    }

    const onNewMessageChange = (body: string) => {
        props.dispatch(updateMessageBodyCreator(body))
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogs={props.dialogs}
                 messages={props.messages}
                 newMessageBody={props.newMessageBody}/>
    );
};

export default DialogsContainer;