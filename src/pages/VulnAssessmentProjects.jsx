import { Link } from 'react-router-dom';

const VulnAssessmentProjects = () => {
  return (
    <div className="min-h-screen bg-gray-200 pt-40 px-4 py-10 flex justify-center">
      <div className="bg-white max-w-3xl w-full p-8 rounded-lg shadow-lg text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Vulnerability Assessment Projects</h1>

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">Internal Vulnerability Assessment Simulation</h2>
          <p className="text-gray-700 mb-4">
            Simulated an internal network scan using OpenVAS and Nmap, identified vulnerabilities,
            and developed a remediation report. Demonstrated skills in scanning, analysis, and
            audit-ready documentation.
          </p>
          <Link
            to="/project/internal-vuln"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VulnAssessmentProjects;