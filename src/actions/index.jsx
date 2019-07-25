import axios from 'axios';

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

// not used in setup as is because actions are called in components and then adjusted
// in reducer.

//TODO: trying to just get one addMessage working...
// export function addMessage(message){
//     return { type: ADD_MESSAGE, payload: message }
// }

//pass index or message
export function deleteMessage(message){
    return { type: DELETE_MESSAGE, payload: message }
}

//New from thunk tutorial (https://alligator.io/redux/redux-thunk/)

export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';
export const ADD_MESSAGE_STARTED = 'ADD_MESSAGE_STARTED';



//export const addMessage = ({ title, userId }) => {
    //TODO: could end up changing {message} to props ? as above
export const addMessage = ({name, message, id}) => {
    console.log({name, message, id});
    //TODO: look more into getState and how to use here
    //return (dispatch, getState) => {
    return (dispatch) => {
    dispatch(addMessageStarted());

    //console.log('current state: ', getState());

    //TODO: note: those aren't quotation marks for http address
    axios
        .post('/messages', {
        name,
        message,
        id
        })
        .then(res => {
            dispatch(addMessageSuccess(res.data));
        })
        .catch(err => {
            dispatch(addMessageFailure(err.message));
        });
    };
};

const addMessageSuccess = message => ({
    type: ADD_MESSAGE_SUCCESS,
    payload: { ...message }
});

const addMessageStarted = () => ({
    type: ADD_MESSAGE_STARTED
});

const addMessageFailure = error => ({
    type: ADD_MESSAGE_FAILURE,
    payload: { error }
});