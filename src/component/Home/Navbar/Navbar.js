import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-4">
            <h2 style={{color: "#FF817E"}}>Leospa</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link mr-5" href="#">DASHBOARD</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">SERVICE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">CONTACT</a>
                    </li>
                
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;