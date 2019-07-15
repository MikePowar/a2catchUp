import React, { Component } from 'react';
import MessageBoardDisplay from './MessageBoardDisplay';

class Home extends Component { 
    
    render(){
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

export default Home