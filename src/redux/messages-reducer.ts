let initialState = {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'How are you doing?'},
            {id: 4, message: 'How are you?'},
            {id: 5, message: 'Yo'},
        ],
}

type ActionsType = ReturnType<typeof updateMessageBodyCreator> | ReturnType<typeof sendMessageCreator>

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const updateMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}



const messagesReducer = (state = initialState, action: ActionsType) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            newMessageBody: action.body
        }
    } else if (action.type === SEND_MESSAGE) {
        let body = action.newMessageBody
        return {
            ...state,
            messages: [...state.messages, {id: 10, message: body}]
        }
    }

    return (
        state
    )
};

export default messagesReducer;