//import React, { useState } from 'react';
import './scenarioquestions2.css';
import saigonlogo from "../saigonchildren_logo.png";
import { useNavigate } from 'react-router-dom';
import React from 'react';


const ScenarioQuestions2 = () => {

    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/scenarioquestions2'); 
    };

    const navigateToNext = () => {
        navigate('/website'); 
    };

    return (
        <div className="scenarioquestions2-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="scenarioquestions2-header">Scenario Questions</h1>
    
                <form className="scenarioquestions2-form">
                    <label htmlFor="scenarioquestions2">If you make an appointment to meet with your Big Buddy and they do not respond (for example via text message), what will you do?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions2" value="one"/>
                            <span>Wait for the Big Buddy to reply</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="two"/>
                            <span>Contact them via Email or Call</span>
                        </label>
                    </div>
                    <label htmlFor="scenarioquestions2">If you follow the above methods and still cannot contact the mentor, what will you do?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions2" value="three"/>
                            <span>Skip this month, contact them again next month</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="four"/>
                            <span>Contact the organizers and ask for connections</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="five"/>
                            <span>Continue to wait for the mentor to answer</span>
                        </label>
                    </div>
                    <label htmlFor="scenarioquestions2">If your Big Buddy appointment coincides with the exam schedule/personal situation that you can not meet them, you will:</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions2" value="six"/>
                            <span>Reschedule the appointment to next month to focus on exam preparation</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="seven"/>
                            <span>Notify the mentor to change the appointment</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="eight"/>
                            <span>Appointment online mentor for flexible time</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="nine"/>
                            <span>Communicating through messages</span>
                        </label>
                    </div>
                    <label htmlFor="scenarioquestions2">Through some mentoring sessions, if you are not satisfied with the mentoring sessions,  what will you do?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions2" value="ten"/>
                            <span>Continue mentoring session</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="eleven"/>
                            <span>Never see them again</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="twelve"/>
                            <span>Share with mentor or organizers and seek help</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions2" value="thirteen"/>
                            <span>Talking with friend</span>
                        </label>
                    </div>
            
                    <div className="button-row">
                        <button type="before" className="before-button" onClick={navigateToBefore}>Before</button>
                        <button type="next" className="next-button" onClick={navigateToNext}>Next</button>
                    </div>
                </form>
        </div>
    );
}

export default ScenarioQuestions2;


