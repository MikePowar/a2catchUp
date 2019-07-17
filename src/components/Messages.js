import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//RETURNS messageList - as Message *** SHOULD MESSAGE name be changed ?
// the returned list is what gets rendered as a component which contains messages & delete message within it.

class Messages extends Component {
    render() {
        const { messages } = this.props;
    const messageList = messages.length ? (
        messages.map(message => {
                return (
                    <div className="message" key={ message.id }>
                        <Link to={'/messages/' + message.id }>
                        <div>Name:{ message.name } </div>
                        <div>Message:{ message.message } </div>
                        </Link>
                        <button onClick={() => {this.props.deleteMessage(message.id)}}>
                            Delete Message
                        </button>
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
        }
        

    const mapStateToProps = (state) => {
    return {
        messages: state.messages
    } }

    const mapDispatchToProps = (dispatch) => {
        return {
            deleteMessage: (id) => { dispatch ({ type: 'DELETE_MESSAGE', id: id }) }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Messages)