import { Link } from 'react-router-dom';

const ProjectCategories = () => {
  const categories = [
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
    }
  ];

  return (
    <section className=" px-4 py-6">
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
