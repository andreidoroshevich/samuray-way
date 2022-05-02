
const UPDATE_NEW_DIALOGS_BODY = "UPDATE_NEW_DIALOGS_BODY";
const SEND_DIALOG = "SEND_DIALOG";

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valery'}
        ],
        newDialogBody: '',
    }

type ActionsType = ReturnType<typeof sendDialogCreator> | ReturnType<typeof updateDialogBodyCreator>

export const updateDialogBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_DIALOGS_BODY,
        body: body
    } as const
}

export const sendDialogCreator = () => {
    return {
        type: SEND_DIALOG,
    } as const
}


const dialogsReducer = (state = initialState, action: ActionsType) => {
    if (action.type === UPDATE_NEW_DIALOGS_BODY) {
        const copyState = {...state}
        copyState.newDialogBody = action.body
        return copyState
    } else if (action.type === SEND_DIALOG) {
        let body = state.newDialogBody
        const copyState = {...state}
        copyState.dialogs = [...state.dialogs]
        copyState.newDialogBody = ''
        copyState.dialogs.push({id: 10, name: body})
        return copyState
    }
    return (
        state
    )
};

export default dialogsReducer;