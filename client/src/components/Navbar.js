import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="fixedContainer">
        <nav className="navBarContainer">
            <div className="blank"></div>
            <div className="navTitle"><h1> AgoraBoard </h1></div>
            <div className="navLinks">     
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
        <div className="colorBar"/>
        <p>Assemble your messages here </p>
        </div>
    )
}

export default Navbar;