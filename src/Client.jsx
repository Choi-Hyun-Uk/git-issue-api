import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from '../global';

const appElement = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <App />
        <GlobalStyle />
    </BrowserRouter>,
    appElement
);