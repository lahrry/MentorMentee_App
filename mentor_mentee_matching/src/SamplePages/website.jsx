import React from "react";
import { Link } from "react-router-dom"; // For navigation links
import "./website.css"; // Assume you have a corresponding CSS file for styling

const Website = () => {
  return (
    <div className="website-container">
      <header className="website-header">
        <h1>Dashboard</h1>
        <nav className="navigation">
          <Link to="/">Home</Link> {/* Adjust as needed */}
          <Link to="/features">Features</Link> {/* Adjust as needed */}
          <Link to="/about">About</Link> {/* Adjust as needed */}
          {/* Add more navigation links as needed */}
        </nav>
      </header>
      <main className="main-content">
        <section className="welcome-section">
          <h2>Welcome to the MentorMentee Dashboard</h2>
          <p>This is your starting point to explore the application.</p>
          <p>hi! this is danielles testing paragraph!</p>
          <p> im copying danielle rn! - verania</p>
        </section>
        <section className="features-section">
          <h2>Features Overview</h2>
          <p>Discover the tools and resources available to you.</p>
          {/* Additional content and components */}
        </section>
        {/* Additional sections as needed */}
      </main>
      <footer className="website-footer">
        <p>© 2024 MentorMentee Program. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Website;
