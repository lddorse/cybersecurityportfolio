import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";
const InternalVulnProject = () => {
    return (
      <FixedCardLayout>
          <BackButton />

          <h1 className="text-3xl font-bold mb-4">Internal Vulnerability Assessment Simulation</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Simulated a full internal vulnerability assessment to evaluate system security...
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Objectives</h2>
          <ul className="list-disc pl-6">
            <li>Identify vulnerabilities in a simulated network environment</li>
            <li>Analyze scan results and prioritize issues</li>
            <li>Create a remediation plan</li>
            <li>Document for audit readiness</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Tools & Technologies</h2>
          <ul className="list-disc pl-6">
            <li>Kali Linux, Nmap, OpenVAS</li>
            <li>Ubuntu Server</li>
            <li>Markdown, PDF</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/OpenVAS_Dashboard_Screenshot.png" alt="OpenVAS Dashboard" />
          <img src="/images/Apache_Vulnerability_Screenshot.png" alt="OpenVAS Dashboard" />
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li><a href="/images/LeoDorsey_CybersecurityScansAndAudit.pdf" target="_blank" className="text-blue-600 underline">Download Report (PDF)</a></li>
            <li><a href="/images/Nmap_Scan_Screenshot.png" target="_blank" className="text-blue-600 underline">Nmap Scan Output</a></li>
            <li><a href="/images/Remediation_Checklist.png" target="_blank" className="text-blue-600 underline">Remediation Checklist</a></li>
          </ul>
  
      </FixedCardLayout>
    );
  };
  
  export default InternalVulnProject;
  