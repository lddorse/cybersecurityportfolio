import { Link } from 'react-router-dom';
import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';
const SecurityControlProjects = () => {
  return (
    <FixedCardLayout>                     <BackButton />
     <h1 className="text-3xl font-bold mb-4 dark:text-gray-100">Security Control Engineering Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 mb-8">

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow mt-6 border border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Security Control Implementation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
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
        </div></div>
        </FixedCardLayout>
  );
};

export default SecurityControlProjects;
