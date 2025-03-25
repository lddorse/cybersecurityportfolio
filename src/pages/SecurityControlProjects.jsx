import { Link } from 'react-router-dom';

const SecurityControlProjects = () => {
  return (
    <div className="min-h-screen bg-gray-200 pt-40 px-4 py-10 flex justify-center">
      <div className="bg-white max-w-3xl w-full p-8 rounded-lg shadow-lg text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Security Control Engineering Projects</h1>

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">Security Control Implementation</h2>
          <p className="text-gray-700 mb-4">
            Implemented technical security controls aligned with NIST and CIS frameworks. 
            Configured firewall rules, hardened systems, and validated control effectiveness. 
            Demonstrated skills in secure configuration, baseline enforcement, and technical documentation.
          </p>
          <Link
            to="/project/security-control"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecurityControlProjects;
