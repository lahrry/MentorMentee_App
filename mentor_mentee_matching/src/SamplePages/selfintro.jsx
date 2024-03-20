//import React, { useState } from 'react';
import './selfintro.css';
import saigonlogo from "../saigonchildren_logo.png";
//import { Link } from 'react-router-dom'


const SelfIntro = () => {

    return (
        <div className="jobstatus-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="jobstatus-header">Job Status</h1>
    
                <form className="jobstatus-form">
                    <label htmlFor="workPlace">Do you currently have a job? (If not, skip this section):</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="jobStatus" value="yes"/>
                            <span>Yes</span>
                        </label>
                        <label>
                            <input type="radio" name="jobStatus" value="no"/>
                            <span>No</span>
                        </label>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="jobPosition">Job Position:</label>
                            <input type="position" id="jobPosition" placeholder="Enter your job position" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="workPlace">Name of Workplace/Company:</label>
                            <input type="placework" id="workPlace" placeholder="Enter your company's name" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="workTime">Working Time:</label>
                            <input type="timeworked" id="workTime" placeholder="Enter number of hours worked" required />
                        </div>
                    </div>
                    <div className="button-row">
                        <button type="before" className="before-button">Before</button>
                        <button type="next" className="next-button">Next</button>
                    </div>
                </form>
        </div>
    );
}

export default SelfIntro;


