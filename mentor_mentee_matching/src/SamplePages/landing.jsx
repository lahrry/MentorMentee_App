import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
    const navigate = useNavigate(); //initialize useNagivate

    //Function to handle login navigation
    const navigateToLogin = () => {
        navigate('/login'); //navigate to login page
    };

    //Function to handle signup navigation
    const navigateToSignUp = () => {
        navigate('/signup'); //navigate to signup page
    };


    return (
        <div className="login-container">
            <div className="login-logo">
            </div>
            <h1>Welcome to Saigon Children!</h1>
            <div className="login-buttons">
                <button className="login-button" onClick={navigateToLogin}>Log In</button>
                <button className="login-button" onClick={navigateToSignUp}>Sign Up</button>
            </div>
        </div>
    );
}

export default LandingPage;
