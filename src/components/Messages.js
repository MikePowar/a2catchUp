import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const messages = ({messages, deleteMessage}) => {
    console.log(messages);
    return (
        <div className="messageList">
            { messages && messages.map(message => {
                return (
                    
                    <div className = "message" key ={message._id}>
                    <div className="clearfix">
                        <button className="removeButton" onClick={() => Axios.delete(`/api/messages/${message._id}`, { data: message._id })
                            .then(res => {
                                console.log(res);
                                console.log(res.data);
                                deleteMessage(message._id);
                            })
                            .catch(err => {
                                console.log(err);
                            })}>
                            delete
                        </button>
                        </div>
                        <Link className="link" to={'/messages/' + message._id }>
                            <div className="fieldTypeName">{ message.name } </div>
                            <div className="fieldTypeMessage">Message:{ message.message } </div>
                        </Link>

                    </div>
                )
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        messages: state.backend.messages
    }}

    //Dispatch the deleteMessage action and give it the message.id as payload
    //mapped function to props
    const mapDispatchToProps = (dispatch) => {
        return {
            deleteMessage: (id) => { dispatch ({ type: 'DELETE_MESSAGE', id: id }) }
        }
    }

//export default connect(mapStateToProps,mapDispatchToProps)(Messages)

export default connect(mapStateToProps, mapDispatchToProps)(messages);
