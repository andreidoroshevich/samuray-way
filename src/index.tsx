import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree =() => {
    ReactDOM.render(
        <BrowserRouter>
            <App posts={store.getState().posts.posts} dialogs = {store.getState().dialogs} messages = {store.getState().messages.messages} dispatch={store.dispatch.bind(store)}  newPostText={store.getState().posts.newPostText} newMessageBody={store.getState().messages.newMessageBody}  />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => {
    console.log('renderTree')
    rerenderEntireTree()
}
)