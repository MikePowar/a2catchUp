import { ADD_MESSAGE } from "../actions";
import { DELETE_MESSAGE } from "../actions";

const initialMessages = {
    messages: [
            {Name: 'Alvin', Message: 'Hi', id: 1},
            {Name: 'Todd', Message: 'Hello', id: 2},
            {Name: 'Kawhi', Message: 'What it do ?', id: 3}
            ]
        }

const messageReducer = (state = initialMessages, action) => {
    return state;
}

export default messageReducer


//REFACTOR: is this const creation necessary ? if so, why ?
//when done a la tutorial, state.slice does not work.
// const initialState = [initialMessages];

// function messageReducer(state = initialState, action){
//     const newState = state.slice(0);

//     switch (action.type){
//         case ADD_MESSAGE:
//             newState.push(action.payload);
//             return newState;

//         case DELETE_MESSAGE:
//             console.log(action);
//             newState.splice(action.id);
//             return newState;
        
//         default:
//             return state;
//         }
//     }

//     export default messageReducer;