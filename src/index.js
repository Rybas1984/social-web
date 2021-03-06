import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/state';
import {BrowserRouter} from "react-router-dom";




export let renderEnttireTree = (state) => {
    ReactDOM.render (
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}
renderEnttireTree(state);
subscribe(renderEnttireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
