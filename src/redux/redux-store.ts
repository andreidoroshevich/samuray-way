import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer, {addPostActionCreator} from "./posts-reducer";
import messagesReducer, {sendMessageCreator} from "./messages-reducer";
import dialogsReducer, {sendDialogCreator, updateDialogBodyCreator} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"


export type ActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof sendDialogCreator>
    | ReturnType<typeof updateDialogBodyCreator>

let reducer = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof reducer>


export default store;


// @ts-ignore
window.store = store