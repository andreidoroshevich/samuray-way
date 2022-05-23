import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer, {addPostActionCreator, updateNewPostTextCreator} from "./posts-reducer";
import messagesReducer, {sendMessageCreator, updateMessageBodyCreator} from "./messages-reducer";
import dialogsReducer, {sendDialogCreator, updateDialogBodyCreator} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


export type ActionType = ReturnType<typeof updateNewPostTextCreator>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof sendDialogCreator>
    | ReturnType<typeof updateDialogBodyCreator>

let reducer = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof reducer>


export default store;


// @ts-ignore
window.store = store