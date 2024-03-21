//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './selfintro2.css';


const SelfIntro2 = () => {

    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/selfintro'); 
    };

    const navigateToNext = () => {
        navigate('/aboutproject'); 
    };

    return (
        <div className="selfintro2-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="selfintro2-header">Self Introduction</h1>
    
                <form className="selfintro2-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Tell us about your skills:</label>
                            <textarea id="selfintro2" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Share a story of an extracurricular activity:</label>
                            <textarea id="selfintro2" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Share a story about your family:</label>
                            <textarea id="selfintro2" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro2">Share a memorable experience:</label>
                            <textarea id="selfintro2" placeholder="Type your answer here" required />
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

export default SelfIntro2;


