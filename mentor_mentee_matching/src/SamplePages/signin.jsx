import React from 'react';
import './signin.css';

const SignInPage = () => {
    return (
        <div className="signin-container">
            <div className="signin-header">
                <img src="/path-to-your-logo.png" alt="Logo" className="signin-logo" />
                <h1>Welcome to Saigon Children's Charity</h1>
            </div>
            <form className="signin-form">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit" className="signin-button">Sign in</button>
            </form>
        </div>
    );
}

export default SignInPage;
