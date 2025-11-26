import FixedCardLayout from "../components/FixedCardLayout";

const RedBlueProject = () => {
    return (
<FixedCardLayout>          <h1 className="text-3xl font-bold mb-4">Red Team / Blue Team Simulation</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Simulated a red team vs. blue team exercise in a lab environment to demonstrate offensive and defensive cybersecurity capabilities. 
            The red team executed recon, exploitation, and privilege escalation. The blue team monitored logs, detected activity, 
            and implemented containment and remediation strategies.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Tools & Environment</h2>
          <ul className="list-disc pl-6">
            <li>Kali Linux, Ubuntu Server</li>
            <li>Nmap, Metasploit, Splunk</li>
            <li>MITRE ATT&CK Framework, Syslog</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/RedBlue_Nmap_Scan.png" alt="Nmap Scan" className="my-4" />
          <img src="/images/RedBlue_Metasploit_Session.png" alt="Metasploit Session" className="my-4" />
          <img src="/images/RedBlue_Splunk_Alert.png" alt="Splunk Alert" className="my-4" />
          <img src="/images/RedBlue_Timeline.png" alt="Attack Timeline" className="my-4" />
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="/images/LeoDorsey_RedBlue_DetailedReport.pdf"
                target="_blank"
                className="text-blue-600 underline"
              >
                Download Detailed Report (PDF)
              </a>
            </li>
          </ul>
          </FixedCardLayout>
    );
  };
  
  export default RedBlueProject;
  