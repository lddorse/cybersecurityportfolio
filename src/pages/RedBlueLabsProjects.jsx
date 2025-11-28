import { Link } from 'react-router-dom';
import FixedCardLayout from '../components/FixedCardLayout';
import BackButton from '../components/BackButton';
const RedBlueLabsProjects = () => {
  return (
<FixedCardLayout>                    <BackButton />
      <h1 className="text-3xl font-bold mb-4">Red Team / Blue Team Lab Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 mb-8">

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">Red Team / Blue Team Simulation</h2>
          <p className="text-gray-700 mb-4">
            Simulated a red team vs. blue team exercise in a lab environment to demonstrate offensive and defensive cybersecurity capabilities.
            The red team executed recon, exploitation, and privilege escalation. The blue team monitored logs, detected activity,
            and implemented containment and remediation strategies.
          </p>
          <Link
            to="/project/red-blue"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-2">MITRE ATT&CK Mapping & Detection Validation</h2>
          <p className="text-gray-700 mb-4">
            Mapped simulated adversarial behavior to the MITRE ATT&CK framework and developed detection logic for key techniques.
            Validated detection effectiveness using Splunk and Sysmon logs. Demonstrated skills in threat mapping,
            detection engineering, and real-time monitoring.
          </p>
          <Link
            to="/project/mitre-detection"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        </div></div>
        </FixedCardLayout>
  );
};

export default RedBlueLabsProjects;
