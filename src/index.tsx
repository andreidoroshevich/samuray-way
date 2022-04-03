import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree =() => {
    ReactDOM.render(
        <BrowserRouter>
            <App posts={store.getState().posts} dialogs = {store.getState().dialogs} messages = {store.getState().messages} dispatch={store.dispatch.bind(store)}  newPostText={store.getState().newPostText} newMessageBody={store.getState().newMessageBody}  />
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)