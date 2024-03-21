//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './scenarioquestions.css';


const ScenarioQuestions = () => {

    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/aboutproject2'); 
    };

    const navigateToNext = () => {
        navigate('/scenarioquestions2'); 
    };

    return (
        <div className="scenarioquestions-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="scenarioquestions-header">Scenario Questions</h1>
    
                <form className="scenarioquestions-form">
                    <label htmlFor="scenarioquestions">What factors determine the success of the mentoring process?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="checkbox" name="scenarioquestions" value="one"/>
                            <span>Commitment, initiative and drive to self-improvement of Little Buddy</span>
                        </label>
                        <label>
                            <input type="checkbox" name="scenarioquestions" value="two"/>
                            <span>Little Buddy's qualifications</span>
                        </label>
                        <label>
                            <input type="checkbox" name="scenarioquestions" value="three"/>
                            <span>Big Buddy's knowledges</span>
                        </label>
                        <label>
                            <input type="checkbox" name="scenarioquestions" value="four"/>
                            <span>Big Buddy's experience</span>
                        </label>
                    </div>
                    <label htmlFor="scenarioquestions">Before mentoring session, what do you need to do?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions" value="five"/>
                            <span>Nothing</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="six"/>
                            <span>Prepare questions to ask Little Buddy</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="seven"/>
                            <span>Make sure to attend the mentoring on time (check the connection, the time and date...)</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="eight"/>
                            <span>Research about the Big Buddy (background, achievements...)</span>
                        </label>
                    </div>
                    <label htmlFor="scenarioquestions">What do you need to do before ending a mentoring session?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions" value="nine"/>
                            <span>Nothing</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="ten"/>
                            <span>Actively arrange the schedule for the next meeting</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="eleven"/>
                            <span>Say thanks for the valuable sharing session</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="twelve"/>
                            <span>Take a picture with Big Buddy</span>
                        </label>
                    </div>
                    <label htmlFor="scenarioquestions">After mentoring session, what need you will do?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="scenarioquestions" value="thirteen"/>
                            <span>Nothing</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="fourteen"/>
                            <span>Write and post a recap in the Little Buddy Facebook Group</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="fifteen"/>
                            <span>Implement the actions outined in the mentoring session</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="sixteen"/>
                            <span>Make an appointment with Big Buddy for the next session</span>
                        </label>
                        <label>
                            <input type="radio" name="scenarioquestions" value="seventeen"/>
                            <span>Contact online with Mentor</span>
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

export default ScenarioQuestions;


