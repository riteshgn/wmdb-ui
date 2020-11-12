import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter } from "react-router-dom";
import App from './app';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
