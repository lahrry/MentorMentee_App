import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
    return (
        <div className="login-container">
            <div className="login-logo">
            </div>
            <h1>Welcome to Saigon Children!</h1>
            <div className="login-buttons">
                <button className="login-button">Log In</button>
                <button className="login-button">Sign Up</button>
            </div>
        </div>
    );
}

export default LandingPage;
