//import React, { useState } from 'react';
import './selfintro2.css';
import saigonlogo from "../saigonchildren_logo.png";
//import { Link } from 'react-router-dom'


const SelfIntro2 = () => {

    return (
        <div className="selfintro2-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="selfintro2-header">Self Introduction</h1>
    
                <form className="selfintro2-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Tell us about your skills:</label>
                            <textarea id="selfintro2" placeholder="Enter your skills" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Share a story of an extracurricular activity:</label>
                            <textarea id="selfintro2" placeholder="Enter your extracurricular activities" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Share a story about your family:</label>
                            <textarea id="selfintro2" placeholder="Enter your family information" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Share a memorable experience:</label>
                            <textarea id="selfintro2" placeholder="Enter your memorable experience" required />
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

export default SelfIntro2;


