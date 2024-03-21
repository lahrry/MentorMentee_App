//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './personalinfo2.css';


const PersonalInfo = () => {
    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/personalinfo'); 
    };

    const navigateToNext = () => {
        navigate('/matchingquestions'); 
    };

    return (
        <div className="personalinfo2-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="personalinfo2-header">Personal Information</h1>
    
                <form className="personalinfo2-form">
                    <label htmlFor="personalinfo2">Gender:</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="personalinfo2" value="male"/>
                            <span>Male</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="female"/>
                            <span>Female</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="other"/>
                            <span>Other</span>
                        </label>
                    </div>
                    <label htmlFor="personalinfo2">Hometown: </label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="personalinfo2" value="one"/>
                            <span>Tây Ninh</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="two"/>
                            <span>Đồng Nai</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="three"/>
                            <span>Hồ Chí Minh City</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="four"/>
                            <span>Tiền Giang</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="five"/>
                            <span>Hậu Giang</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="six"/>
                            <span>Trà Vinh</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="seven"/>
                            <span>Other</span>
                        </label>
                    </div>
        
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="personalinfo2">University/College Attending:</label>
                            <textarea id="personalinfo2" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <label htmlFor="personalinfo2">Current GPA:</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="personalinfo2" value="lower"/>
                            <span> Less than 7.5 </span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="equal"/>
                            <span>7.5 - 9.0</span>
                        </label>
                        <label>
                            <input type="radio" name="personalinfo2" value="higher"/>
                            <span> Greater than 9.0 </span>
                        </label>
                    </div>
                    <div className="button-row">
                        <button type="before" className="before-button" onClick={navigateToBefore}>Before</button>
                        <button type="next" className="next-button" onClick={navigateToNext}>Next</button>
                    </div>
                </form>
        </div>
    );
}

export default PersonalInfo;


