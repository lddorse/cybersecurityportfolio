import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const RedBlueProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Red Team / Blue Team Simulation
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Simulated a red team vs. blue team exercise in a lab environment to demonstrate offensive and defensive cybersecurity capabilities. 
          The red team executed recon, exploitation, and privilege escalation. The blue team monitored logs, detected activity, 
          and implemented containment and remediation strategies.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & Environment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Kali Linux, Ubuntu Server</li>
          <li>Nmap, Metasploit, Splunk</li>
          <li>MITRE ATT&CK Framework, Syslog</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img src="/images/RedBlue_Nmap_Scan.png" alt="Nmap Scan" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Nmap Scan</p>
          </div>
          <div>
            <img src="/images/RedBlue_Metasploit_Session.png" alt="Metasploit Session" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Metasploit Session</p>
          </div>
          <div>
            <img src="/images/RedBlue_Splunk_Alert.png" alt="Splunk Alert" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Splunk Alert</p>
          </div>
          <div>
            <img src="/images/RedBlue_Timeline.png" alt="Attack Timeline" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Attack Timeline</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/images/LeoDorsey_RedBlue_DetailedReport.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Download Detailed Report (PDF)</a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default RedBlueProject;
