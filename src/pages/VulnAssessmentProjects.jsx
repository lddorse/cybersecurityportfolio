import { Link } from 'react-router-dom';
import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';

const VulnAssessmentProjects = () => {
  return (
    <FixedCardLayout>                    
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Vulnerability Assessment Projects
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow mt-6 border border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Internal Vulnerability Assessment Simulation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Simulated an internal network scan using OpenVAS and Nmap, identified vulnerabilities,
            and developed a remediation report. Demonstrated skills in scanning, analysis, and
            audit-ready documentation.
          </p>
          <Link
            to="/project/internal-vuln"
            className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            View Project
          </Link>
        </div>
      </div>
    </FixedCardLayout>
  );
};

export default VulnAssessmentProjects;
