import { Link } from 'react-router-dom';

const ProjectCategories = () => {
  const categories = [
    {
      name: 'Web Development',
      path: '/projects/web-development',
      description: 'Full-stack applications, e-commerce platforms, and API integrations.'
    },
    {
      name: 'Vulnerability Assessments',
      path: '/projects/vulnerability-assessments',
      description: 'Scanning, enumeration, and internal assessments.'
    },
    {
      name: 'Risk & Policy Management',
      path: '/projects/risk-policy',
      description: 'Risk analysis, security policies, and frameworks.'
    },
    {
      name: 'Phishing & User Awareness',
      path: '/projects/phishing-awareness',
      description: 'Phishing simulation, user training, and awareness.'
    },
    {
      name: 'Red Team / Blue Team Labs',
      path: '/projects/red-blue-labs',
      description: 'Simulated offensive and defensive exercises.'
    },
    {
      name: 'Security Control Engineering',
      path: '/projects/security-controls',
      description: 'Implementation and hardening of systems and networks.'
    },
    {
      name: 'Helpdesk & Incident Response',
      path: '/projects/incident-response',
      description: 'Ticket triage, investigation, and incident handling.'
    }
  ];

  return (
    <section className="px-4 py-6">
      {/* Featured Project */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Project</h2>
        <div className="max-w-4xl mx-auto bg-blue-50 shadow-lg rounded-lg p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Elo Sec Platform</h3>
          <p className="text-gray-700 mb-4">
            Self-hosted network security & infrastructure monitoring platform running on Raspberry Pi 4. 
            Blocks 1,500+ weekly intrusion attempts using Pi-hole, WireGuard VPN, Grafana monitoring, and automated threat detection.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Stack:</strong> Pi-hole • WireGuard • Grafana • Docker • Nginx
          </p>
          <div className="flex gap-3 mb-4">
            <a href="https://elosec.tech" target="_blank" rel="noopener noreferrer" className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Live Site
            </a>
            <a href="https://status.leodorsey.com" target="_blank" rel="noopener noreferrer" className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Status
            </a>
          </div>
          <Link to="/projects/elosec-platform" className="text-blue-600 hover:underline font-semibold">
            View Full Project Details →
          </Link>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Project Categories</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {categories.map((cat, index) => (
          <Link
            to={cat.path}
            key={index}
            className="block bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
            <p className="text-gray-600">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectCategories;
