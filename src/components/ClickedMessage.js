import React, { Component } from 'react';
import Messages from './Messages';
import MesageBoardDisplay from './MessageBoardDisplay';

class ClickedMessage extends Component {

    state = {
        id: null,
        message: null
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.message_id;
            
            this.setState((state,props) => ({
                    id: id
                }));
    }

    render(){
        return(
        <div>
            <h4>yo yo yo</h4>
            <h4>{this.state.id}</h4>
            {/* <Messages clickedMessage={this.state.id.getClickedMessage} /> */}
        </div>
        )
    }
}

export default ClickedMessage;