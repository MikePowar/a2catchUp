export const ADD_MESSAGE = 'ADD_MESSAGE'
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'


export function addMessage(message){
    return { type: ADD_MESSAGE, payload: message }
}

export function toggleMessage(message){
    return { type: TOGGLE_MESSAGE, payload: message }
}

//pass index or message
export function deleteMessage(message){
    return { type: DELETE_MESSAGE, payload: message }
}
