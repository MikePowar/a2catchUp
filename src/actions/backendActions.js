export const createMessages = (message) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch ({ type: 'CREATE_MESSAGES', message: message });
    }
};

export const FETCH_MESSAGES_BEGIN   = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const fetchMessagesBegin = () => ({
    type: FETCH_MESSAGES_BEGIN
});

export const fetchMessagesSuccess = messages => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: { messages }
});

export const fetchMessagesFailure = error => ({
    type: FETCH_MESSAGES_FAILURE,
    payload: { error }
});

export function fetchMessages() {
    return dispatch => {
        dispatch(fetchMessagesBegin());
        return fetch('/api/messages')
            .then(handleErrors)
            .then(res => 
                res.json())
            .then(json => {
                dispatch(fetchMessagesSuccess(json));
                console.log(json);
                return json;
            })
            .catch(error => dispatch(fetchMessagesFailure(error)));
    };
}

  // Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}