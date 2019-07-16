import React, { Component } from 'react';
import Messages from './Messages';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';


class MessageBoardDisplay extends Component {

// state = {
//     messages: [
//       { Name: 'Alvin', Message: 'Hi', id: 1},
//       { Name: 'Todd', Message: 'Hello', id: 2},
//       { Name: 'Lev', Message: 'Good Morning', id: 3}
//     ]
//   }

    // addMessage = (message) => {
    //     message.id = Math.random();
    //     let messages = [...this.state.messages, message]
    //     this.setState({
    //     messages: messages
    //     })
    // }

    //this delete function must be here because it interacts with the state defined above in App.js
    // deleteMessage = (id) => {
    //     //FILTER
    //     let messages = this.state.messages.filter(message => 
    //     {
    //         return message.id !== id;
    //     });
    //     this.setState({  
    //         //key: value - that are the same could also just say messages ...
    //     messages: messages
    //     })
    // }

/*     getClickedMessage = (id) =>
    {
        const message = this.state.messages.length ? (
        this.state.messages.filter(message =>
        ( 
            if (message.id === id){
                return message;
            }
        ) : ( <div>No Messages</div> )
        ))
    } */

    render(){
        console.log(this.props);
        return(
            <div>
                <Messages messages = {this.props.messages} />

                {/* deleteMessage={this.deleteMessage} />
                <AddMessage addMessage={this.addMessage}/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}


export default connect(mapStateToProps)(MessageBoardDisplay);