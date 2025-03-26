import FixedCardLayout from "../components/FixedCardLayout";

const MitreAttackProject = () => {
    return (
        <FixedCardLayout>
          <h1 className="text-3xl font-bold mb-4">MITRE ATT&CK Mapping & Detection Validation</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Simulated a multi-stage adversary attack and mapped behaviors to the MITRE ATT&CK framework. 
            Developed detection logic for each technique and validated visibility using Splunk and Sysmon logs. 
            Demonstrated skills in threat mapping, detection engineering, and log analysis.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Mapped Techniques</h2>
          <ul className="list-disc pl-6">
            <li>T1046 – Network Service Scanning</li>
            <li>T1059 – Command & Scripting Interpreter</li>
            <li>T1105 – Ingress Tool Transfer</li>
            <li>T1021.001 – Remote Services: SSH</li>
            <li>T1082 – System Information Discovery</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/MITRE_ATTACK_Matrix_Mock.png" alt="MITRE ATT&CK Matrix" className="my-4" />
          <img src="/images/MITRE_Splunk_Detection_Mock.png" alt="Splunk Detection Output" className="my-4" />
          <img src="/images/MITRE_Technique_Summary_Table.png" alt="Summary Table" className="my-4" />

          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="/images/LeoDorsey_MITRE_Detection_Validation_Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Download Full Report (PDF)
              </a>
            </li>
          </ul>
          </FixedCardLayout>
    );
  };
  
  export default MitreAttackProject;