import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import saigonPNG from "../saigon.png";
import saigon2PNG from "../saigon2.png";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Need to implement sign-in logic
    navigate("/website");
  };
  return (
    <div className="signin-container">
      <div className="signin-header">
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="signin-logo" /> */}
        {/* <h1>Log In</h1> */}
        <img src={saigon2PNG} alt="Saigon3" className="saigon3-svg" />
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        {" "}
        {/*Add onSubmit handler*/}
        <div className="input-group">
          {/* <label htmlFor="email">Username</label>
          <input type="email" id="email" required /> */}
        </div>
        <div className="input-group">
          {/* <label htmlFor="password">Password</label>
          <input type="password" id="password" required /> */}
        </div>
        {/* <button type="submit" className="signin-button">
          Log in
        </button> */}
      </form>
      <div className2="newsignin-container">
        <img src={saigonPNG} alt="Saigon" className="saigon-svg" />
      </div>
      {/* <img src={saigonSVG} alt="Saigon" className="saigon-svg" /> */}
    </div>
  );
};

export default SignInPage;
