import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './../actions/index';

class AddMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            message: '',
            id: ''
        //  id: Math.floor(Math.random() * 2000)
        };
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const newState = {
            ...this.state,
            id: Math.random()
        }
        console.log(newState);
        this.props.addMessage(newState);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="name">Message:</label>
                    <input type="text" placeholder="write something" id="message" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id) => { dispatch (addMessage(id)) }
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);