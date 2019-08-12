import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import ClickedMessage from './ClickedMessage';


class App extends Component {


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar className="navBar"/>
          <div className="preScroll" />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/messages/:_id" component={ClickedMessage} />
        </div>
      </BrowserRouter>

    );
  }
}


export default App;
