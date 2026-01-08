import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';

const RiskAssessmentProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Risk Assessment and Information Gathering
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Conducted a comprehensive risk assessment to identify vulnerabilities, evaluate business impact,
          and develop risk mitigation strategies across critical IT assets and information systems.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Map assets and classify business-critical systems</li>
          <li>Identify internal and external threats</li>
          <li>Conduct impact and likelihood analysis</li>
          <li>Deliver risk scores and strategic recommendations</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & Technologies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Qualys, OpenVAS, Wireshark, OSINT Framework</li>
          <li>NIST SP 800-30, ISO/IEC 27005</li>
          <li>Risk Matrix & Asset Risk Scoring</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img src="/images/Asset_Risk_Ranking_Summary.png" alt="Asset Risk Summary" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Asset Risk Ranking Summary</p>
          </div>
          <div>
            <img src="/images/Risk_Matrix_Example.png" alt="Risk Matrix Example" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Risk Matrix Example</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/images/LeoDorsey_RiskAssessmentAndInfoGathering.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Download Report (PDF)</a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default RiskAssessmentProject;
