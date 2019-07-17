import React, { Component } from 'react';
import Messages from './Messages';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';


class MessageBoardDisplay extends Component {

    render(){
        
        return(
            <div>
                <Messages messages = {this.props.messages}/>
                <AddMessage addMessage={this.addMessage}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: (id) => { dispatch ({ type: 'DELETE_MESSAGE', id: id }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardDisplay);