//import React, { useState } from 'react';
import './selfintro.css';
import saigonlogo from "../saigonchildren_logo.png";
//import { Link } from 'react-router-dom'


const SelfIntro = () => {

    return (
        <div className="selfintro-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="selfintro-header">Self Introduction</h1>
    
                <form className="selfintro-form">
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">Introduce Yourself:</label>
                            <textarea id="selfintro" placeholder="Tell us about yourself" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What are your hobbies?</label>
                            <textarea id="selfintro" placeholder="List some of your hobbies" required />
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What is your favorite quote?</label>
                            <textarea id="selfintro" placeholder="Enter your favorite quote" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What is your favorite film/movie?</label>
                            <textarea id="selfintro" placeholder="Enter your favorite film/movie" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="selfintro">What is your favorite book?</label>
                            <textarea id="selfintro" placeholder="Enter your favorite book" required />
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


