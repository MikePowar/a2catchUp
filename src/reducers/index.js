import { ADD_MESSAGE } from "../actions";
import { DELETE_MESSAGE } from "../actions";

const initialMessages = [
            {Name: 'Alvin', Message: 'Hi', id: 1},
            {Name: 'Todd', Message: 'Hello', id: 2},
            {Name: 'Lev', Message: 'Good Morning', id: 3}
        ]

const initialState = [initialMessages];

function messageReducer(state = initialState, action){
    const newState = state.slice(0);

    switch (action.type){
        case ADD_MESSAGE:
            newState.push(action.payload);
            return newState;

        case DELETE_MESSAGE:
            console.log(action);
            newState.splice(action.id);
            return newState;
        
        default:
            return state;
        }
    }

    export default messageReducer;