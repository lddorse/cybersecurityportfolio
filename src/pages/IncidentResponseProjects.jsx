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

  return (<FixedCardLayout> 
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <BackButton />
        
        <h1 className="text-4xl font-bold mb-4">Helpdesk & Incident Response</h1>
        <p className="text-gray-600 mb-8">
          Real-world ticket simulations demonstrating triage, investigation, and incident handling skills.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Skills Demonstrated:</h4>
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

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">About This Section</h3>
          <p className="text-gray-700">
            These projects simulate real helpdesk and SOC tickets, demonstrating my ability to:
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            <li>Triage and prioritize security incidents</li>
            <li>Perform systematic investigation and root cause analysis</li>
            <li>Document findings and maintain clear communication</li>
            <li>Identify lessons learned and recommend preventive measures</li>
          </ul>
        </div>
      </div>
    </div>
  </FixedCardLayout> );
};

export default IncidentResponseProjects;