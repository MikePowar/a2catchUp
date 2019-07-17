import { ADD_MESSAGE } from "../actions";
import { DELETE_MESSAGE } from "../actions";

const initialMessages = {
    messages: [
            {name: 'Alvin', message: 'Hi', id: 1},
            {name: 'Todd', message: 'Hello', id: 2},
            {name: 'Kawhi', message: 'What it do ?', id: 3}
            ]
        }

const messageReducer = (state = initialMessages, action) => {
    switch (action.type){
        case 'DELETE_MESSAGE':  
            let newMessages = state.messages.filter(message => {
                return action.id !== message.id
            });
            return {
                    messages: newMessages
                };
        
        case 'ADD_MESSAGE':
            const newState = state.messages.slice(0);
            newState.push(action.payload);
            console.log(newState)
            return {
                messages: newState
            }

        default: 
            console.log('Default state')
            return state;
    }
}

export default messageReducer


