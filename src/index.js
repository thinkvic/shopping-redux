import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(
    rootReducer
)


// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. 
ReactDOM.render(

    <App store={store} />,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
