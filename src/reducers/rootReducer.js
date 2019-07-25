import backendReducer from './backend';
import messageReducer from './messageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    backend: backendReducer
    //message: messageReducer
})

export default rootReducer;