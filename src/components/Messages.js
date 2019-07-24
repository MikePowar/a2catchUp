import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const messages = ({messages, deleteMessage}) => {
    console.log(messages);
    return (
        <div className="messageList">
            { messages && messages.map(message => {
                return (
                    
                    <div className = "message" key ={message.id}>
                        
                        <Link to={'/messages/' + message.id }>
                            <div>Name:{ message.name } </div>
                            <div>Message:{ message.message } </div>
                        </Link>
                        <button onClick={() => {deleteMessage(message.id)}}>
                            Delete Message
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

//class Messages extends Component {
   // render() {
        //console.log(this.props);
        /* const messages = this.props.messages;
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
                ) : ( <div>No messages</div> ) */
/*                 
        const messageList = ({messages}) =>
        {
        return (
            <div className="messageList">
                { messageList }
            </div>
            )
        } */
 //   }
//}

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
