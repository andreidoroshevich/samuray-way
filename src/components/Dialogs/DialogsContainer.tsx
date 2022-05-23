import React from 'react';
import {DialogPropsType} from "./Dialog/Dialog";
import  {MessagePropsType} from "./Message/Message";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/messages-reducer";
import {RootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



type MapDialogsDispatchPropsType = {
    updateNewMessageBody: (body: string)=>void,
    sendMessage: ()=>void
}

type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newDialogBody: string
}

const mapStateToProps = (state: RootState)=>{
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.messages.messages,
        newDialogBody: state.messages.newMessageBody,
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

// const WithAuthRedirect = (props: any)=>{
//     if (!props.isAuth) return <Redirect to={'/Login'}/>
//     return <Dialogs {...props} />
// }

// export default  withAuthRedirect(connect<MapStateToPropsType, MapDialogsDispatchPropsType, any, RootState>(mapStateToProps,mapDispatchToProps)(Dialogs));

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDialogsDispatchPropsType, any, RootState>(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
