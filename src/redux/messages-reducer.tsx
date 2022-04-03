import React from 'react';
import {ActionType, statePropsType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


const messagesReducer = (state: any, action: ActionType) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === "SEND_MESSAGE") {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 10, message: body})

    }
    return (
        state
    )
};

export default messagesReducer;