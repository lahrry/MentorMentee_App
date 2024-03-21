//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './aboutproject.css';


const AboutProject = () => {

    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/selfintro2'); 
    };

    const navigateToNext = () => {
        navigate('/aboutproject2'); 
    };

    return (
        <div className="aboutproject-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="aboutproject-header">About the Project</h1>
    
                <form className="aboutproject-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="aboutproject">What is your understaning of the Big Buddy Little Buddy project?</label>
                            <textarea id="aboutproject" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="aboutproject">What are your expectations for this project?</label>
                            <textarea id="aboutproject" placeholder="Type your answer here" required />
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

export default AboutProject;


