import React, { Component } from 'react'

class About extends Component {
render(){
    console.log(this.props)
    return (
        <div>
            <h4>ABOUT</h4>
            <p>
                this is the about page
            </p>
        </div>
    )
}
}

export default About