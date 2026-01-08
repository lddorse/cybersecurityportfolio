import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const InternalVulnProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Internal Vulnerability Assessment Simulation
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Simulated a full internal vulnerability assessment to evaluate system security...
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Identify vulnerabilities in a simulated network environment</li>
          <li>Analyze scan results and prioritize issues</li>
          <li>Create a remediation plan</li>
          <li>Document for audit readiness</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & Technologies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Kali Linux, Nmap, OpenVAS</li>
          <li>Ubuntu Server</li>
          <li>Markdown, PDF</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img 
              src="/images/OpenVAS_Dashboard_Screenshot.png" 
              alt="OpenVAS Dashboard" 
              className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">OpenVAS Dashboard</p>
          </div>
          <div>
            <img 
              src="/images/Apache_Vulnerability_Screenshot.png" 
              alt="Apache Vulnerability" 
              className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Apache Vulnerability Detection</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a 
              href="/images/LeoDorsey_CybersecurityScansAndAudit.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Download Report (PDF)
            </a>
          </li>
          <li>
            <a 
              href="/images/Nmap_Scan_Screenshot.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Nmap Scan Output
            </a>
          </li>
          <li>
            <a 
              href="/images/Remediation_Checklist.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            >
              Remediation Checklist
            </a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default InternalVulnProject;
