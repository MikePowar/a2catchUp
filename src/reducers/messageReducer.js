// import { ADD_MESSAGE } from "../actions";
// import { DELETE_MESSAGE } from "../actions";
// import Messages, { state } from "../components/Messages";

// const initialMessages = {
//     messages: [
//         {
//             name: '',
//             message: '',
//             id: 1
//         }
//     ]
//         }

// // reducer function takes two arguments: 1) state (set with above array) & 2) an action
// // reducer returns a new state based on the action, updating the given(old) state accordingly
// const messageReducer = (state = initialMessages, action) => {
//     switch (action.type){
//         case 'DELETE_MESSAGE':
//             console.log(action);  
//             let newMessages = state.messages.filter(message => {
//                 return action.id !== message.id
//             });
//             return {
//                 messages: newMessages
//                 };
        
//         case 'ADD_MESSAGE':
//             console.log(action);
//             console.log(state);
//             const newState = state.messages.slice(0);
//             newState.push(action.payload);
//             return {
//                 messages: newState
//             };

//         default:
//             console.log(state); 
//             return state;
            
//     }
// }

// export default messageReducer


