import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import signinimg from "../saigon.png";

// import saigonPNG from "../saigon.png";
// import saigon2PNG from "../saigon2.png";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Need to implement sign-in logic
    navigate("/website");
  };
  return (
    <div className = "signin-container">
      <div className = "signinright-container">
        <h1 className = "signin-header">Log In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
         {" "}
          <div className = "form-row">
            <div className="input-group">
              <label htmlFor="email">Username</label>
              <input type="email" id="email" placeholder = "Enter your username"required /> 
            </div>
         </div>
         <div className = "form-row">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required /> 
            </div>
         </div>
         <button type="submit" className="signin-button">Log in</button> 
         <div className="createAccount">
                        <div className="createAccount">
                            <p className = "needAccount">Need a Saigon Children account? Create an account</p>
                        </div>
          </div>
       </form>
      </div>
      <img src={signinimg} alt="SignupIMG" className="signup-image" />
    </div>
  );
};

export default SignInPage;
