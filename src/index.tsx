import React from 'react';
import './index.css';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {statePropsType, updateNewPostText} from './redux/state'
import {addPost} from './redux/state'
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree =() => {
    ReactDOM.render(
        <BrowserRouter>
            <App posts={state.posts} dialogs = {state.dialogs} messages = {state.messages} addPost={addPost} newPostText={state.newPostText} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree()
subscribe(rerenderEntireTree)