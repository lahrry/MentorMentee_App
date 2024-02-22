import React, { useState } from 'react';
import './signup.css';
import signupimg from "../signup-image.svg";
import { Link } from 'react-router-dom'
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap')
</style>




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
            <div className="signupright-container">
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
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Create your password" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Your Password</label>
                            <input type="password" id="confirmPassword" placeholder="Re-enter your password" required />
                        </div>
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                    <div className="already-have">
                        <div className="already-have">
                            <Link to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </form>
            </div>
            <img src={signupimg} alt="SignupIMG" className="signup-image" />
        </div>
    );
}




export default SignUpPage;


