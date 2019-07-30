import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1> Ghostwriter </h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;