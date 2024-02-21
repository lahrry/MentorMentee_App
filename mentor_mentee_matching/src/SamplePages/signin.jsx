import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
<<<<<<< Updated upstream
import saigonSVG from "../saigon.svg";
import saigon3SVG from "../saigon3.svg";
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="signin-logo" /> */}
        {/* <h1>Log In</h1> */}
        <img src={saigon3SVG} alt="Saigon3" className="saigon3-svg" />
=======
        <img src="/path-to-your-logo.png" alt="Logo" className="signin-logo" />
        <h1>Welcome to Saigon Children's Charity</h1>
>>>>>>> Stashed changes
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        {" "}
        {/*Add onSubmit handler*/}
        <div className="input-group">
<<<<<<< Updated upstream
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
        <img src={saigonSVG} alt="Saigon" className="saigon-svg" />
      </div>
      {/* <img src={saigonSVG} alt="Saigon" className="saigon-svg" /> */}
=======
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="signin-button">
          Sign in
        </button>
      </form>
>>>>>>> Stashed changes
    </div>
  );
};

export default SignInPage;
