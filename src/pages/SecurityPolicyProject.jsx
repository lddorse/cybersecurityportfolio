import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';

const SecurityPolicyProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Security Policy Development and Enforcement
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Created and enforced security policies aligned with organizational needs and industry best practices.
          Developed documentation for acceptable use, password standards, and access control.
          Demonstrated skills in policy writing, stakeholder communication, and compliance alignment.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Establish foundational security documentation and standards</li>
          <li>Ensure compliance with NIST and CIS frameworks</li>
          <li>Improve user behavior and clarify IT expectations</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & References</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Microsoft Word, Google Docs, Internal Wiki</li>
          <li>NIST SP 800-53, CIS Controls, ISO/IEC 27002</li>
          <li>Acceptable Use, Password, Access Control, and BYOD Policies</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div>
          <img 
            src="/images/Acceptable_Use_Policy_Screenshot.png" 
            alt="Acceptable Use Policy" 
            className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Acceptable Use Policy</p>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            
              href="/images/LeoDorsey_SecurityPolicyDevelopment.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Download Report (PDF)
            </a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default SecurityPolicyProject;
