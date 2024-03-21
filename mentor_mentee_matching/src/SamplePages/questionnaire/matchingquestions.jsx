//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './matchingquestions.css';


const MatchingQuestions = () => {
    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/personalinfo2'); 
    };

    const navigateToNext = () => {
        navigate('/matchingquestions2'); 
    };

    return (
        <div className="matchingquestions-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="matchingquestions-header">Matching Questions</h1>
    
                <form className="matchingquestions-form">
                    <label htmlFor="matchingquestions">Academic Year:</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="matchingquestions" value="first"/>
                            <span>First Year</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="second"/>
                            <span>Second Year</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="third"/>
                            <span>Third Year</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="fourth"/>
                            <span>Fourth Year</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="other"/>
                            <span>Other</span>
                        </label>
                    </div>
                    <label htmlFor="matchingquestions">Major Field: </label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="matchingquestions" value="one"/>
                            <span>Humanities</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="two"/>
                            <span>Social Sciences</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="three"/>
                            <span>Natural Sciences</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="four"/>
                            <span>Mathematics and Statistics </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="five"/>
                            <span>Engineering</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="six"/>
                            <span>Computer Science and Information Technology </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="seven"/>
                            <span>Business and Management </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="eight"/>
                            <span>Health Sciences </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="nine"/>
                            <span>Education</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="ten"/>
                            <span>Fine Arts</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="eleven"/>
                            <span>Communication and Media </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="twelve"/>
                            <span>Agriculture and Environmental Studies</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="thirteen"/>
                            <span>Language and Linguistics </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="fourteen"/>
                            <span>Health and Wellness </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="fifteen"/>
                            <span>Public Administration and Policy</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="sixteen"/>
                            <span>Law and Legal Studies </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="seventeen"/>
                            <span>Architecture and Interior Design </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions" value="eighteen"/>
                            <span>Interdisciplinary Studies</span>
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

export default MatchingQuestions;


