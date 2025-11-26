import { Link } from 'react-router-dom';
import FixedCardLayout from '../components/FixedCardLayout';

const RiskPolicyProjects = () => {
  return (
    <FixedCardLayout>        <h1 className="text-3xl font-bold mb-4">Risk & Policy Management Projects</h1>

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">Risk Assessment and Information Gathering</h2>
          <p className="text-gray-700 mb-4">
            Performed a full organizational risk assessment by identifying assets, gathering intelligence,
            and analyzing threats. Delivered risk scores and mitigation strategies aligned with NIST standards.
            Demonstrated skills in threat modeling, risk analysis, and strategic reporting.
          </p>
          <Link
            to="/project/risk-assessment"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">Security Policy Development and Enforcement</h2>
          <p className="text-gray-700 mb-4">
            Created and enforced security policies aligned with organizational needs and industry best practices.
            Developed documentation for acceptable use, password standards, and access control. Demonstrated skills in
            policy writing, stakeholder communication, and compliance alignment.
          </p>
          <Link
            to="/project/security-policy"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>
        </FixedCardLayout>
  );
};

export default RiskPolicyProjects;