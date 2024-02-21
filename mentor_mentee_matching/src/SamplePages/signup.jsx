import React, { useState } from 'react';
import './signup.css';
import signupimg from "../signup-image.svg";


const SignUpPage = () => {
    const [userType, setUserType] = useState(''); // State to store user type (mentor or mentee)


    const handleButtonClick = (type) => {
      setUserType(type);
    };
 
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Here you can submit the form data along with the user type (mentor or mentee)
    //   console.log('Submitted userType:', userType);
    // };


    return (
        <div className="signup-container">
            <h1 className="signup-header">Sign Up</h1>
            <p className ="signup-text">Join SaigonChildren as a</p>
            <div className="toggle-switch">
                <button
                    className={userType === 'mentor' ? 'active' : ''}
                    onClick={() => handleButtonClick('mentor')}
                >
                    Mentor
                </button>
                <button
                    className={userType === 'mentee' ? 'active' : ''}
                    onClick={() => handleButtonClick('mentee')}
                >
                    Mentee
                </button>
            </div>
            <h1 className="signup-header">Sign Up</h1>
            <p className ="signup-text">Join SaigonChildren as a</p>
            <div className="toggle-switch">
                <button
                    className={userType === 'mentor' ? 'active' : ''}
                    onClick={() => handleButtonClick('mentor')}
                >
                    Mentor
                </button>
                <button
                    className={userType === 'mentee' ? 'active' : ''}
                    onClick={() => handleButtonClick('mentee')}
                >
                    Mentee
                </button>
            </div>
            <form className="signup-form">
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" placeholder="Create your username" required />
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" placeholder="Create your username" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Create your password" required />
                        <input type="password" id="password" placeholder="Create your password" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Your Password</label>
                        <input type="password" id="confirmPassword" placeholder="Re-enter your password" required />
                        <label htmlFor="confirmPassword">Confirm Your Password</label>
                        <input type="password" id="confirmPassword" placeholder="Re-enter your password" required />
                    </div>
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <img src={signupimg} alt="SignupIMG" className="signup-image" />
        </div>
    );
}


export default SignUpPage;