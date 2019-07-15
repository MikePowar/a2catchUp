import React, { Component } from 'react'

class AddMessage extends Component{
    state = {
        Name: null,
        Message: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="Name" onChange={this.handleChange} />

                    <label htmlFor="name">Message:</label>
                    <input type="text" placeholder="write something" id="Message" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>
        ) 
    }
}

export default AddMessage;