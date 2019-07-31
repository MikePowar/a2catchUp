import React, { Component } from 'react';
import { connect } from 'react-redux';


class ClickedMessage extends Component {

    render(){
        console.log(this.props);
        let id = this.props.match.params._id;
        console.log(id);
        //const parseId = parseInt(id);
        console.log(this.props.messages);
        const result = this.props.messages.find(message => (message._id === id));
        console.log(this.props)
        return(
        <div>
            <h4>Detail View</h4>
            <h4>Message Id: {id}</h4>
            <div className="messageList">
                <div className="message" key={ result._id }>
                    <div>Name:{ result.name } </div>
                    <div>Message:{ result.message } </div>
                </div>
            </div>
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.backend.messages
    }
}

export default connect(mapStateToProps)(ClickedMessage);