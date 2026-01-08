import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const MitreAttackProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        MITRE ATT&CK Mapping & Detection Validation
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Simulated a multi-stage adversary attack and mapped behaviors to the MITRE ATT&CK framework. 
          Developed detection logic for each technique and validated visibility using Splunk and Sysmon logs. 
          Demonstrated skills in threat mapping, detection engineering, and log analysis.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Mapped Techniques</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>T1046 – Network Service Scanning</li>
          <li>T1059 – Command & Scripting Interpreter</li>
          <li>T1105 – Ingress Tool Transfer</li>
          <li>T1021.001 – Remote Services: SSH</li>
          <li>T1082 – System Information Discovery</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img src="/images/MITRE_ATTACK_Matrix_Mock.png" alt="MITRE ATT&CK Matrix" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">MITRE ATT&CK Matrix</p>
          </div>
          <div>
            <img src="/images/MITRE_Splunk_Detection_Mock.png" alt="Splunk Detection Output" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Splunk Detection Output</p>
          </div>
          <div>
            <img src="/images/MITRE_Technique_Summary_Table.png" alt="Summary Table" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Technique Summary Table</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="/images/LeoDorsey_MITRE_Detection_Validation_Report.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">Download Full Report (PDF)</a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default MitreAttackProject;
