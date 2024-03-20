import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './SamplePages/landing.jsx';
import SignInPage from './SamplePages/signin.jsx';
import SignUpPage from './SamplePages/signup.jsx';
import Website from './SamplePages/website.jsx';
import JobStatus from './SamplePages/jobstatus.jsx';
import SelfIntro from './SamplePages/selfintro.jsx';
import SelfIntro2 from './SamplePages/selfintro2.jsx';
import AboutProject from './SamplePages/aboutproject.jsx';
import AboutProject2 from './SamplePages/aboutproject2.jsx';
import ScenarioQuestions from './SamplePages/scenarioquestions.jsx';
import ScenarioQuestions2 from './SamplePages/scenarioquestions2.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/website" element={<Website />} />
        <Route path="/jobstatus" element={<JobStatus />} />
        <Route path="/selfintro" element={<SelfIntro />} />
        <Route path="/selfintro2" element={<SelfIntro2 />} />
        <Route path="/aboutproject" element={<AboutProject />} />
        <Route path="/aboutproject2" element={<AboutProject2 />} />
        <Route path="/scenarioquestions" element={<ScenarioQuestions />} />
        <Route path="/scenarioquestions2" element={<ScenarioQuestions2 />} />
      </Routes>
    </Router>
  );
}

export default App;

// {Showing the main website first when we access}
// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import JobStatus from './SamplePages/jobstatus.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<JobStatus/>} /> 
//       </Routes>
//     </Router>
//   );
// }

// export default App;




