//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './jobstatus.css';


const JobStatus = () => {
    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/personalinfo2'); 
    };

    const navigateToNext = () => {
        navigate('/selfintro'); 
    };

    return (
        <div className="jobstatus-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="jobstatus-header">Job Status</h1>
    
                <form className="jobstatus-form">
                    <label htmlFor="jobstatus">Do you currently have a job? (If not, skip this section):</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="jobstatus" value="yes"/>
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" name="jobstatus" value="no"/>
                            <span>No</span>
                        </label>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="jobstatus">Job Position:</label>
                            <textarea id="jobstatus" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="jobstatus">Name of Workplace/Company:</label>
                            <textarea id="jobstatus" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="jobstatus">Working Time:</label>
                            <textarea id="jobstatus" placeholder="Type your answer here" required />
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

export default JobStatus;


