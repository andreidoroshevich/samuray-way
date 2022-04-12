import {combineReducers, createStore} from "redux";
import postsReducer, {addPostActionCreator, updateNewPostTextCreator} from "./posts-reducer";
import messagesReducer, {sendMessageCreator, updateMessageBodyCreator} from "./messages-reducer";
import dialogsReducer, {sendDialogCreator, updateDialogBodyCreator} from "./dialogs-reducer";

// export type ActionType = ReturnType<typeof updateNewPostTextCreator> |
//     ReturnType<typeof addPostActionCreator> |
//     ReturnType<typeof updateMessageBodyCreator> |
//     ReturnType<typeof sendMessageCreator> |
//     ReturnType<typeof sendDialogCreator> |
//     ReturnType<typeof updateDialogBodyCreator>

export type statePropsType = {
    posts: any
    dialogs: any
    messages: any
}


export type StoreType = {
    _state: statePropsType
    _callsubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => statePropsType
}



let reducers = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    dialogs: dialogsReducer
})


let store = createStore(reducers)


export default store;