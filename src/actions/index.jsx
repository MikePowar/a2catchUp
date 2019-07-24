export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

// not used in setup as is because actions are called in components and then adjusted
// in reducer.

export function addMessage(message){
    return { type: ADD_MESSAGE, payload: message }
}

//pass index or message
export function deleteMessage(message){
    return { type: DELETE_MESSAGE, payload: message }
}
