import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider
            clientId="754317980356-5kha3jmphg9tm7oirmn7pac4fbauj85o.apps.googleusercontent.com">
            <App/>
        </GoogleOAuthProvider>
    </React.StrictMode>
);


