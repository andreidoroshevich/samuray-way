import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import Dialog, {DialogPropsType} from "./Dialog/Dialog";
import Message, {MessagePropsType} from "./Message/Message";


type DialogsPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    // dispatch: (action: ActionType) => void
    updateNewMessageBody: (body: string)=>void
    sendMessage: ()=>void
}


const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)
    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={classes.dialogs}>

            <div className={classes.dialog_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>

                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea>



                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;