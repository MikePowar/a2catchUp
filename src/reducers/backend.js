import { FETCH_MESSAGES_BEGIN, FETCH_MESSAGES_FAULURE, FETCH_MESSAGES_SUCCESS } from '../actions/backendActions';
import { ADD_MESSAGE } from "../actions";
import { DELETE_MESSAGE } from "../actions";
import { ADD_MESSAGE_SUCCESS, ADD_MESSAGE_FAILURE, ADD_MESSAGE_STARTED } from '../actions/index';
import axios from 'axios';

const initState = {
    messages: [],
    loading: false,
    error: null,
    loading: false
};

const backendReducer = (state = initState, action) => {
    switch (action.type){
        case 'FETCH_MESSAGES_BEGIN':
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
                return {
                    ...state,
                    loading: true,
                    error: null
                };
        case 'FETCH_MESSAGES_FAILURE':
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                messages: []
                };
        case 'FETCH_MESSAGES_SUCCESS':
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                messages: action.payload.messages
            };
        case 'DELETE_MESSAGE':
                console.log(action);
                let newMessages = state.messages.filter(message => {
                    return action.id !== message.id
                        });
                    return {
                        messages: newMessages
                        };
                // axios.
                //     delete('/messages', action.id)
                //     .then(res => {
                //         let newMessages = state.messages.filter(message => {
                //             return action.id !== message.id
                //                 });
                //             return {
                //                 messages: newMessages
                //             };
                //     })
                //     .catch(err => {
                //         console.log(err)
                //     });
                
                
                
        //TODO: Get one AddMessage working        
        // case 'ADD_MESSAGE':
        //         console.log(action);
        //         const newState = state.messages.slice(0);
        //         newState.push(action.payload);
        //         return {
        //             messages: newState
        //             };
        //TODO: new cases for adding Messages with post request from tutorial ()
        case 'ADD_MESSAGE_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'ADD_MESSAGE_SUCCESS':
                //const newState = state.messages.slice(0);
                //newState.push(action.payload);    
            return {
                    //TODO: FIX THIS
                    ...state,
                    messages: [...state.messages, action.payload],
                    //messages: newState,
                    loading: false,
                    error: null
                };
        case 'ADD_MESSAGE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
        }
    }

export default backendReducer;
