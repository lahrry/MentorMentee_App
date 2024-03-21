import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './SamplePages/Dashboard.jsx';
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
import PersonalInfo from './SamplePages/questionnaire/personalinfo.jsx';
import PersonalInfo2 from './SamplePages/questionnaire/personalinfo2.jsx';
import MatchingQuestions from './SamplePages/questionnaire/matchingquestions.jsx';
import MatchingQuestions2 from './SamplePages/questionnaire/matchingquestions2.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/personalinfo2" element={<PersonalInfo2 />} />
        <Route path="/matchingquestions" element={<MatchingQuestions />} />
        <Route path="/matchingquestions2" element={<MatchingQuestions2 />} />
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















