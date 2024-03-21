import React from 'react';
import logo from '../saigonchildren.png'; // adjust the path as needed
import userImage from '../userimage.jpeg'; // adjust the path as needed
import './Dashboard.css'; // assuming you have this file ready

function Dashboard() {
  // ... your existing Dashboard component code ...

  return (
    <div className="dashboard">
      <nav className="dashboard-navbar">
        <img src={logo} alt="Saigon Children Logo" className="logo" />
        {/* other nav items */}
      </nav>
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <h3>Thank you for submitting your application. In the meantime, feel free to take a look at our list of mentors.</h3>
        <div className="mentor-cards-container">
          {/* ... iterate over your mentors ... */}
          <div className="mentor-card">
            <img src={userImage} alt="Mentor" className="mentor-image" />
            <h2>Le Thi Lam</h2>
            <p>Designer, Google</p>
            <p> 3 YOE MID-LEVEL</p>
            {/* other mentor details */}
          </div>
          <div className="mentor-card">
            <img src={userImage} alt="Mentor" className="mentor-image" />
            <h2>Le Thi Lam</h2>
            <p>Senior Software Engineer, Microsoft</p>
            <p> 5 YOE SENIOR LEVEL</p>
            {/* other mentor details */}
          </div>
        </div>
        {/* <div className="mentor-card">
            <img src={userImage} alt="Mentor" className="mentor-image" />
            <h2>Le Thi Lam</h2>
            <p>Designer, Google</p>
            {/* other mentor details */}
          {/* </div> */} 
      </div>
    </div>
  );
}

export default Dashboard;
