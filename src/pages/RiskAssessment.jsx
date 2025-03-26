import FixedCardLayout from '../components/FixedCardLayout';
const RiskAssessmentProject = () => {
  return (
    <FixedCardLayout>        <h1 className="text-3xl font-bold mb-4">Risk Assessment and Information Gathering</h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
        <p>
          Conducted a comprehensive risk assessment to identify vulnerabilities, evaluate business impact,
          and develop risk mitigation strategies across critical IT assets and information systems.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Objectives</h2>
        <ul className="list-disc pl-6">
          <li>Map assets and classify business-critical systems</li>
          <li>Identify internal and external threats</li>
          <li>Conduct impact and likelihood analysis</li>
          <li>Deliver risk scores and strategic recommendations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tools & Technologies</h2>
        <ul className="list-disc pl-6">
          <li>Qualys, OpenVAS, Wireshark, OSINT Framework</li>
          <li>NIST SP 800-30, ISO/IEC 27005</li>
          <li>Risk Matrix & Asset Risk Scoring</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
        <img src="/images/Asset_Risk_Ranking_Summary.png" alt="Asset Risk Summary" className="my-4" />
        <img src="/images/Risk_Matrix_Example.png" alt="Risk Matrix Example" className="my-4" />

        <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/images/LeoDorsey_RiskAssessmentAndInfoGathering.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Download Report (PDF)
            </a>
          </li>
        </ul>
        </FixedCardLayout>
  );
};

export default RiskAssessmentProject;
