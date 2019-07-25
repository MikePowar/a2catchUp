import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './../actions/index';
//import { addMessageAxios } from './../actions/index';



class AddMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            message: '',
            id: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let idGenerator = Math.floor(Math.random() *20000);
        const newState = {
            ...this.state,
            id: idGenerator
        }
        console.log(newState);
        this.props.addMessage(newState);
        console.log(this.props);
        //this.props.addMessageAxios(newState);
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
        messages: state.backend.messages
    }}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newState) => { dispatch (addMessage(newState)) }
        //addMessageAxios: (newState) => {dispatch (addMessageAxios(newState))}
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);