//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './selfintro.css';


const SelfIntro = () => {

    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/jobstatus'); 
    };

    const navigateToNext = () => {
        navigate('/selfintro2'); 
    };

    return (
        <div className="selfintro-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="selfintro-header">Self Introduction</h1>
    
                <form className="selfintro-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">Introduce Yourself:</label>
                            <textarea id="selfintro" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What are your hobbies?</label>
                            <textarea id="selfintro" placeholder="Type your answer here" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What is your favorite quote?</label>
                            <textarea id="selfintro" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What is your favorite film/movie?</label>
                            <textarea id="selfintro" placeholder="Type your answer here" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What is your favorite book?</label>
                            <textarea id="selfintro" placeholder="Type your answer here" required />
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

export default SelfIntro;


