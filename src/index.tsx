import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App, {SamuraiJSApp} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <SamuraiJSApp/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => {
        rerenderEntireTree()
    }
)