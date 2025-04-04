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
import ScrollToTop from './components/ScrollToTop';
import ProjectCategories from './components/ProjectsCategories';
import VulnAssessmentProjects from './pages/VulnAssessmentProjects';
import RiskPolicyProjects from './pages/RiskPolicyProjects';
import PhishingAwarenessProjects from './pages/PhishingAwarenessProjects';
import RedBlueLabsProjects from './pages/RedBlueLabsProjects';
import RedBlueProject from './pages/RedBlueProject';
import SecurityControlProjects from './pages/SecurityControlProjects';
import MitreAttackProject from './pages/MitreAttackProject';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './custom.css';
import FixedCardLayout from './components/FixedCardLayout';
import PortfolioPage from './pages/PortfolioPage';
import PongGame from './pages/PongGame';
import WeatherCanvas from './pages/WeatherCanvas';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="relative h-screen bg-gray-200">
            {/* Fixed A5 Card */}
            <FixedCardLayout>
                <Hero />
                <Skills />
                <WeatherCanvas />
                <PongGame /> 
              </FixedCardLayout>
          </div>
        } />   

        <Route path="/projects/security-controls" element={<SecurityControlProjects />} />   
        <Route path="/projects/red-blue-labs" element={<RedBlueLabsProjects />} />  
        <Route path="/projects/phishing-awareness" element={<PhishingAwarenessProjects />} />
        <Route path="/projects/risk-policy" element={<RiskPolicyProjects />} />
        <Route path="/projects/vulnerability-assessments" element={<VulnAssessmentProjects />} />
        <Route path="/project/mitre-detection" element={<MitreAttackProject />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route path="/project/internal-vuln" element={<InternalVulnProject />} />
        <Route path="/project/risk-assessment" element={<RiskAssessment />} />
        <Route path="/project/phishing-simulation" element={<PhishingProject />} />
        <Route path="/project/security-policy" element={<SecurityPolicyProject />} />
        <Route path="/project/issue-resolution" element={<IssueResolutionProject />} />
        <Route path="/project/security-control" element={<SecurityControlProject />} />
        <Route path="/project/red-blue" element={<RedBlueProject />} />
      </Routes>
    </Router>
  );
}

export default App;
