import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from './../actions/index';
//import { addMessageAxios } from './../actions/index';



class AddMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newState = {
            ...this.state
        }
        console.log(newState);
        this.props.addMessage(newState);
        console.log(this.props);
        //this.props.addMessageAxios(newState);
    }
    
    render(){
        return(
            <div>
                <form className="submissionBox" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="label" htmlFor="name"></label>
                        <input type="text" placeholder="NAME" id="name" onChange={this.handleChange} />
                    </div>

                    <div>
                        <label className="label" htmlFor="message"></label>
                        <input type="text" placeholder="MESSAGE" id="message" onChange={this.handleChange} />
                    </div>
                    <button className="submitButton" >Submit</button>
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