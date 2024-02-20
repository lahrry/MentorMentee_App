import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import saigonSVG from "../saigon.svg";

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
        <img src="/path-to-your-logo.png" alt="Logo" className="signin-logo" />
        <h1>Log In</h1>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        {" "}
        {/*Add onSubmit handler*/}
        <div className="input-group">
          <label htmlFor="email">Username</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="signin-button">
          Log in
        </button>
      </form>
      <img src={saigonSVG} alt="Saigon" className="saigon-svg" />
    </div>
  );
};

export default SignInPage;
