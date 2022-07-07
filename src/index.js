import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOMClient from "react-dom/client";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
