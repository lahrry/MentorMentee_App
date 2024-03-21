//import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import saigonlogo from "../../saigonchildren_logo.png";
import './matchingquestions2.css';


const MatchingQuestions2 = () => {
    const navigate = useNavigate(); //initialize useNagivate
    
    const navigateToBefore = () => {
        navigate('/matchingquestions'); 
    };

    const navigateToNext = () => {
        navigate('/jobstatus'); 
    };

    return (
        <div className="matchingquestions2-container">
                <img src={saigonlogo} alt="SaigonLogo" className="saigonlogo" />
                <h1 className="matchingquestions2-header">Matching Questions</h1>
    
                <form className="matchingquestions2-form">
                
                    <label htmlFor="matchingquestions2">Major Field: </label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="matchingquestions2" value="one"/>
                            <span>Humanities</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="two"/>
                            <span>Social Sciences</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="three"/>
                            <span>Natural Sciences</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="four"/>
                            <span>Mathematics and Statistics </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="five"/>
                            <span>Engineering</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="six"/>
                            <span>Computer Science and Information Technology </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="seven"/>
                            <span>Business and Management </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="eight"/>
                            <span>Health Sciences </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="nine"/>
                            <span>Education</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="ten"/>
                            <span>Fine Arts</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="eleven"/>
                            <span>Communication and Media </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="twelve"/>
                            <span>Agriculture and Environmental Studies</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="thirteen"/>
                            <span>Language and Linguistics </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="fourteen"/>
                            <span>Health and Wellness </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="fifteen"/>
                            <span>Public Administration and Policy</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="sixteen"/>
                            <span>Law and Legal Studies </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="seventeen"/>
                            <span>Architecture and Interior Design </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="eighteen"/>
                            <span>Interdisciplinary Studies</span>
                        </label>
                    </div>
                    <label htmlFor="matchingquestions2">What type of mentee are you?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="matchingquestions2" value="g"/>
                            <span>G (General - Do not have any specific expectation) </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="c"/>
                            <span>C (Career - Need career orientation)</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="e"/>
                            <span>E (Elite - Have a specific target in life like start a business, buying  a house or car)</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="f"/>
                            <span>F (Focus - Have many troubles like personal issues, mental issues)</span>
                        </label>
                    </div>
                    <label htmlFor="matchingquestions2">What soft skills do you want to be mentored in?</label>
                    <div className="checkbox-wrapper">
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills1"/>
                            <span>CV and Job interview </span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills1"/>
                            <span>Teamwork</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills2"/>
                            <span>Domain Career Path</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills3"/>
                            <span>Communication</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills4"/>
                            <span>Leadership</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills5"/>
                            <span>HR</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills6"/>
                            <span>Get to know yourself/Characteristics</span>
                        </label>
                        <label>
                            <input type="radio" name="matchingquestions2" value="softskills7"/>
                            <span>Other</span>
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

export default MatchingQuestions2;


