import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InternalVulnProject from './pages/InternalVulnProject';
import RiskAssessment from "./pages/RiskAssessment";
import PhishingProject from "./pages/PhishingProject";
import SecurityPolicyProject from './pages/SecurityPolicyProject';
import IssueResolutionProject from './pages/IssueResolutionProject';
import SecurityControlProject from './pages/SecurityControlProject';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-200 pt-40 flex items-center justify-center px-4 py-10">
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-8">
              <Hero />
              <Skills />
              <CredentialsSection />
              <ContactSection />
              <Projects />
            </div>
          </div>
        } />
        <Route path="/project/internal-vuln" element={<InternalVulnProject />} />
        <Route path="/project/risk-assessment" element={<RiskAssessment />} />
        <Route path="/project/phishing-simulation" element={<PhishingProject />} />
        <Route path="/project/security-policy" element={<SecurityPolicyProject />} />
        <Route path="/project/issue-resolution" element={<IssueResolutionProject />} />
        <Route path="/project/security-control" element={<SecurityControlProject />} />

      </Routes>
    </Router>
  );
}

export default App;
