import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './SamplePages/landing.jsx';
import AboutProject from './SamplePages/questionnaire/aboutproject.jsx';
import AboutProject2 from './SamplePages/questionnaire/aboutproject2.jsx';
import JobStatus from './SamplePages/questionnaire/jobstatus.jsx';
import ScenarioQuestions from './SamplePages/questionnaire/scenarioquestions.jsx';
import ScenarioQuestions2 from './SamplePages/questionnaire/scenarioquestions2.jsx';
import SelfIntro from './SamplePages/questionnaire/selfintro.jsx';
import SelfIntro2 from './SamplePages/questionnaire/selfintro2.jsx';
import SignInPage from './SamplePages/signin.jsx';
import SignUpPage from './SamplePages/signup.jsx';
import Website from './SamplePages/website.jsx';

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




