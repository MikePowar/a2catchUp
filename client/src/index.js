import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

//create Store using createStore function from redux library
//createStore takes in the reducer to return a store that the <Provider> can give to the app
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

//Provider takes care of re-rendering new state - given changes vis a vis messageReducer
// how does provider do this ? It utilizes Store method: subscribe(listener) - and listens
// for any changes to the store.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
