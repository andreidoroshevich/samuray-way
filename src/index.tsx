import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App posts={store.getState().posts.posts}
                 dialogs={store.getState().dialogs.dialogs}
                 messages={store.getState().messages.messages}
                 dispatch={store.dispatch.bind(store)}
                 newPostText={store.getState().posts.newPostText}
                 newMessageBody={store.getState().messages.newMessageBody}
            />
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => {
        rerenderEntireTree()
    }
)