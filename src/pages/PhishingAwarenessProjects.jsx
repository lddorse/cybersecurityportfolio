import { Link } from 'react-router-dom';
import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';
const PhishingAwarenessProjects = () => {
  return (
    <FixedCardLayout>
                        <BackButton />

        <h1 className="text-3xl font-bold mb-4 dark:text-gray-100">Phishing & User Awareness Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 mb-8">

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow mt-6 border border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Phishing Simulation and User Awareness Training</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Simulated phishing attacks using Gophish to evaluate user susceptibility, tracked engagement metrics,
            and developed training content to reduce risk. Demonstrated skills in social engineering awareness,
            reporting, and user education strategies.
          </p>
          <Link
            to="/project/phishing-simulation"
            className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            View Project
          </Link>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow mt-6 border border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Issue Resolution and Root Cause Analysis</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Investigated technical and user-based security issues, performed root cause analysis,
            and implemented sustainable resolutions. Demonstrated skills in incident response,
            log analysis, and cross-team communication.
          </p>
          <Link
            to="/project/issue-resolution"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>
        </div>
        </FixedCardLayout>
  );
};

export default PhishingAwarenessProjects;
