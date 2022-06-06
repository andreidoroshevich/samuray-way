import {applyMiddleware, combineReducers, createStore} from "redux";
import postsReducer, {addPostActionCreator, PostActionsType} from "./posts-reducer";
import messagesReducer, {MessagesActionsType, sendMessageCreator} from "./messages-reducer";
import dialogsReducer, {DialogsActionsType, sendDialogCreator, updateDialogBodyCreator} from "./dialogs-reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import {useDispatch} from "react-redux";
import appReducer from "./app-reducer";


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
    app: appReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof reducer>
export type ThunkType <ReturnType = void> = ThunkAction<ReturnType,RootState, unknown, AppActionsType>
type AppActionsType = PostActionsType | MessagesActionsType | DialogsActionsType | UsersActionsType | AuthActionsType
export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, AppActionsType>>()



export default store;


// @ts-ignore
window.store = store