import FixedCardLayout from '../components/FixedCardLayout';

const SecurityPolicyProject = () => {
    return (
        <FixedCardLayout>          <h1 className="text-3xl font-bold mb-4">Security Policy Development and Enforcement</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Created and enforced security policies aligned with organizational needs and industry best practices.
            Developed documentation for acceptable use, password standards, and access control.
            Demonstrated skills in policy writing, stakeholder communication, and compliance alignment.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Objectives</h2>
          <ul className="list-disc pl-6">
            <li>Establish foundational security documentation and standards</li>
            <li>Ensure compliance with NIST and CIS frameworks</li>
            <li>Improve user behavior and clarify IT expectations</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Tools & References</h2>
          <ul className="list-disc pl-6">
            <li>Microsoft Word, Google Docs, Internal Wiki</li>
            <li>NIST SP 800-53, CIS Controls, ISO/IEC 27002</li>
            <li>Acceptable Use, Password, Access Control, and BYOD Policies</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/Acceptable_Use_Policy_Screenshot.png" alt="Acceptable Use Policy" className="my-4" />
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="/images/LeoDorsey_SecurityPolicyDevelopment.pdf"
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
  
  export default SecurityPolicyProject;
  