import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function GuestNavbar() {
    return (
        <div>
            <div className="navbar-area">
                <div className="mobile-nav">
                    <a href="index.html" className="logo">
                        <img src="assets\images\logo.png" alt="logo" />
                    </a>
                </div>
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav text-left">
                                    <li className="nav-item">
                                        <a href="/" >Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="guest/news" className="nav-link">News</a>
                                    </li>
                                </ul>
                            </div>
                            <Router>
                                <div className="nav-btn">
                                    <a href="/login" className="box-btn">Log In</a>
                                </div>
                            </Router>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
