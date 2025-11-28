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
    // Add more incident response projects here in the future
  ];

  return (
    <FixedCardLayout> 
      <div className="max-w-6xl mx-auto">
        <BackButton />
        
        <h1 className="text-3xl font-bold mb-4">Helpdesk & Incident Response</h1>
        <p className="mb-8">
          Real-world ticket simulations demonstrating triage, investigation, and incident handling skills.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={project.path}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Ticket
              </Link>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-2">About This Section</h2>
        <p>
          These projects simulate real helpdesk and SOC tickets, demonstrating my ability to:
        </p>
        <ul className="list-disc pl-6 mt-3">
          <li>Triage and prioritize security incidents</li>
          <li>Perform systematic investigation and root cause analysis</li>
          <li>Document findings and maintain clear communication</li>
          <li>Identify lessons learned and recommend preventive measures</li>
        </ul>
      </div>
    </FixedCardLayout>
  );
};

export default IncidentResponseProjects;