import React from 'react';
import {DialogPropsType} from "./Dialog/Dialog";
import  {MessagePropsType} from "./Message/Message";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import {RootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";



type MapDialogsDispatchPropsType = {
    updateNewMessageBody: (body: string)=>void,
    sendMessage: ()=>void
}

type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newDialogBody: string
    isAuth: boolean
}

const mapStateToProps = (state: RootState)=>{
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.messages.messages,
        newDialogBody: state.messages.newMessageBody,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDialogsDispatchPropsType=>{
    return {
        updateNewMessageBody: (body: string)=>{
            dispatch(updateMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())

        }
    }

}


export default  connect<MapStateToPropsType, MapDialogsDispatchPropsType, any, RootState>(mapStateToProps,mapDispatchToProps)(Dialogs);