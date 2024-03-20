//import React, { useState } from 'react';
import './jobstatus.css';
// import signupimg from "../signupimg2.png";
//import { Link } from 'react-router-dom'


const JobStatus = () => {

    return (
        <div className="jobstatus-container">
                <h1 className="jobstatus-header">Job Status</h1>
    
                <form className="jobstatus-form">
                    <div className="checkbox-wrapper">
                        <label htmlFor="jobStat">Do you currently have a job? (If not, skip this section)</label> 
                        <label>
                            <input type="checkbox"/>
                            <span>Yes</span>
                            <input type="checkbox"/>
                            <span>No</span>
                        </label>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="jobPosition">Username</label>
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
                    <button type="before" className="before-button">Before</button>
                    <button type="next" className="next-button">Next</button>
                </form>
            {/* <img src={signupimg} alt="SignupIMG" className="signup-image" /> */}
        </div>
    );
}

export default JobStatus;


