import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav
                className="navbar is-dark"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">WMDB</Link>

                    <button
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="app-navbar"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div
                    id="app-navbar"
                    className="navbar-menu"
                >
                    <div className="navbar-start">
                        <Link className="navbar-item is-active" to="/">Home</Link>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;