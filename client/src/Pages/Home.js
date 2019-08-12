import React, { Component } from 'react';
import MessageBoardDisplay from '../components/MessageBoardDisplay';
import { connect } from 'react-redux';


class Home extends Component { 
    
    render(){
        console.log(this.props)
        return (
        <div>
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