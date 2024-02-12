import React from 'react';
import './signup.css';

const SignUpPage = () => {
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form className="signup-form">
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" id="dateOfBirth" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Create Username</label>
                        <input type="text" id="username" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="hometown">Hometown</label>
                        <input type="text" id="hometown" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="repeatPassword">Repeat password</label>
                        <input type="password" id="repeatPassword" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="profilePicture">Choose a profile picture</label>
                        <input type="file" id="profilePicture" />
                    </div>
                </div>
                <button type="submit" className="signup-button">Create Account</button>
            </form>
        </div>
    );
}

export default SignUpPage;
