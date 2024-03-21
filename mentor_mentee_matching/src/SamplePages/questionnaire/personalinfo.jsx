//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './personalinfo.css';


const PersonalInfo = () => {
    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('../signup'); 
    };

    const navigateToNext = () => {
        navigate('/personalinfo2'); 
    };

    return (
        <div className="personalinfo-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="personalinfo-header">Personal Information</h1>
    
                <form className="personalinfo-form">
        
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="personalinfo">Full Name:</label>
                            <textarea id="personalinfo" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="personalinfo">SaigonChildren ID:</label>
                            <textarea id="personalinfo" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="personalinfo">Phone Number:</label>
                            <textarea id="personalinfo" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="personalinfo">Email:</label>
                            <textarea id="personalinfo" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="personalinfo">Current Address:</label>
                            <textarea id="personalinfo" placeholder="Type your answer here" required />
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

export default PersonalInfo;


