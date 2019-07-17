import React, { Component } from 'react';
import MessageBoardDisplay from '../components/MessageBoardDisplay';
import { connect } from 'react-redux';


class Home extends Component { 
    
    render(){
        console.log(this.props)
        
        return (
        <div>
            <h4>HOME</h4>
            <p>
                messages for the message board
            </p>
            <MessageBoardDisplay />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Home)