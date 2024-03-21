import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './SamplePages/Dashboard.jsx';
import LandingPage from './SamplePages/landing.jsx';
import SignInPage from './SamplePages/signin.jsx';
import SignUpPage from './SamplePages/signup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<DashboardPage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import DashboardPage from './SamplePages/Dashboard.jsx';
// import LandingPage from './SamplePages/landing.jsx';
// import SignInPage from './SamplePages/signin.jsx';
// import SignUpPage from './SamplePages/signup.jsx';
// import Website from './SamplePages/website.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<SignInPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/website" element={<Website />} />
//         <Route path="/Dashboard" element={<DashboardPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






