import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// a functional component: that returns a template div - that outputs from app component via props
// messages are received by Message below as a messages prop (state set in App.js)

//RETURNS messageList - as Message *** SHOULD MESSAGE name be changed ?
// the returned list is what gets rendered as a component which contains messages & delete message within it.

const Messages = ({messages, deleteMessage}) => {
    //create a list by mapping through messages and return the message to be displayed
    //calling a map function on each message in the array so each message is displayed.
    const messageList = messages.length ? (
        messages.map(message => {
                return (
                    <div className="message" key={ message.id }>
                        <Link to={'/' + message.id }>
                        <div>Name:{ message.Name } </div>
                        <div>Message:{ message.Message } </div>
                        </Link>
                        <button onClick={() => {deleteMessage(message.id)}}>Delete message</ button>
                    </div>
                )
                })
                ) : ( <div>No messages</div> )
        return (
            <div className="messageList">
                { messageList }
            </div>
        )
    }

 
export default connect()(Messages)