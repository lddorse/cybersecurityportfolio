import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import FixedCardLayout from '../components/FixedCardLayout';

const IncidentResponseProjects = () => {
  const projects = [
    {
      title: 'MFA Challenge Investigation',
      description: 'Investigated suspicious MFA request at 3am. Performed log analysis, verified authentication attempts, and documented incident response procedures.',
      path: '/project/ticket-mfa-challenge',
      skills: ['Incident Response', 'Log Analysis', 'MFA Security', 'Documentation']
    },
    {
      title: 'Slow WiFi / High Latency – East Wing',
      description: 'Diagnosed intermittent wireless performance issues affecting users during peak hours. Analyzed AP load, checked channel interference, and recommended configuration adjustments.',
      path: '/project/ticket-wifi-latency',
      skills: ['Network Troubleshooting', 'WiFi Analysis', 'Latency Diagnostics', 'Helpdesk Support']
    },
    {
      title: 'Possible Phishing Email — "Verify Your Microsoft Account"',
      description: 'Analyzed a suspicious email claiming Microsoft account verification. Performed header inspection, link analysis, and provided user education & remediation steps.',
      path: '/project/ticket-phishing-microsoft',
      skills: ['Phishing Analysis', 'Email Security', 'User Awareness', 'Threat Hunting']
    }
  ];

  return (
    <FixedCardLayout> 
      <BackButton />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Helpdesk & Incident Response
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Real-world ticket simulations demonstrating triage, investigation, and incident handling skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <Link
              to={project.path}
              className="inline-block bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              View Ticket
            </Link>
          </div>
        ))}
      </div>


    </FixedCardLayout>
  );
};

export default IncidentResponseProjects;
