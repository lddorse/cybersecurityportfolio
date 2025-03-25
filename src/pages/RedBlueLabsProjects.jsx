import { Link } from 'react-router-dom';

const RedBlueLabsProjects = () => {
  return (
    <div className="min-h-screen bg-gray-200 pt-40 px-4 py-10 flex justify-center">
      <div className="bg-white max-w-3xl w-full p-8 rounded-lg shadow-lg text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Red Team / Blue Team Lab Projects</h1>

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">Red Team / Blue Team Simulation</h2>
          <p className="text-gray-700 mb-4">
            Simulated a red team vs. blue team exercise in a lab environment to demonstrate offensive and defensive cybersecurity capabilities.
            The red team executed recon, exploitation, and privilege escalation. The blue team monitored logs, detected activity,
            and implemented containment and remediation strategies.
          </p>
          <Link
            to="/project/red-blue"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RedBlueLabsProjects;
