// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import LandingPage from './SamplePages/landing.jsx';
// import SignInPage from './SamplePages/signin.jsx';
// import SignUpPage from './SamplePages/signup.jsx';
// import Website from './SamplePages/website.jsx';
// import JobStatus from './SamplePages/questionnaire/jobstatus.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<SignInPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/website" element={<Website />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// {Showing the main website first when we access}
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import SelfIntro from './SamplePages/selfintro.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelfIntro />} /> 
      </Routes>
    </Router>
  );
}

export default App;




