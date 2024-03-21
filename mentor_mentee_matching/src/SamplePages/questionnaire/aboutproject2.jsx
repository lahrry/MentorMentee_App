//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './aboutproject2.css';


const AboutProject2 = () => {

    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/aboutproject'); 
    };

    const navigateToNext = () => {
        navigate('/scenarioquestions'); 
    };

    return (
        <div className="aboutproject2-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="aboutproject2-header">About the Project</h1>
    
                <form className="aboutproject2-form">
                    <label htmlFor="aboutproject2">Have you participated in a similar project?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="aboutproject2" value="yes"/>
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" name="aboutproject2" value="no"/>
                            <span>No</span>
                        </label>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="aboutproject2">Share your experience with the project (optional):</label>
                            <textarea id="aboutproject2" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="aboutproject2">How would you rate your ability to commit and maintain weekly meetings with your mentor? (1-10)</label>
                            <textarea id="aboutproject2" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="button-row">
                        <button type="before" className="before-button" onClick={navigateToBefore}>Before</button>
                        <button type="next" className="next-button" onClick={navigateToNext}>Next</button>
                    </div>
                </form>
        </div>
    );
}

export default AboutProject2;


