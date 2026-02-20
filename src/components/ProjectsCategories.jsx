import { Link } from 'react-router-dom';

const ProjectCategories = () => {
  const categories = [
    {
      title: 'Vulnerability Assessment',
      description: 'Security scanning, analysis, and remediation projects',
      icon: '🔍',
      link: '/projects/vuln-assessment',
      color: 'blue'
    },
    {
      title: 'Incident Response',
      description: 'Helpdesk tickets and security incident handling',
      icon: '🚨',
      link: '/projects/incident-response',
      color: 'red'
    },
    {
      title: 'Risk Assessment',
      description: 'Risk analysis and information gathering',
      icon: '⚖️',
      link: '/projects/risk-assessment',
      color: 'yellow'
    },
    {
      title: 'Security Policy',
      description: 'Policy development and enforcement',
      icon: '📋',
      link: '/projects/security-policy',
      color: 'green'
    },
    {
      title: 'Phishing & User Awareness',
      description: 'Phishing simulations and training',
      icon: '🎣',
      link: '/projects/phishing',
      color: 'purple'
    },
    {
      title: 'Red Team / Blue Team',
      description: 'Offensive and defensive security exercises',
      icon: '⚔️',
      link: '/projects/red-blue',
      color: 'orange'
    },
    {
      title: 'MITRE ATT&CK',
      description: 'Threat mapping and detection validation',
      icon: '🎯',
      link: '/projects/mitre-attack',
      color: 'indigo'
    },
    {
      title: 'Security Controls',
      description: 'Implementation of technical and administrative controls',
      icon: '🔒',
      link: '/projects/security-controls',
      color: 'teal'
    },
    {
      title: 'Issue Resolution',
      description: 'Root cause analysis and problem solving',
      icon: '🔧',
      link: '/projects/issue-resolution',
      color: 'gray'
    },
    {
      title: 'Web Development',
      description: 'Full-stack web applications and projects',
      icon: '🌐',
      link: '/projects/web-development',
      color: 'pink'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Featured Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Featured Projects</h2>
        
        <div className="space-y-6">
          {/* Elosec Platform - Primary Featured */}
          <Link
            to="/projects/elosec"
            className="block bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all shadow-lg hover:shadow-xl"
          >
            <div className="flex items-start">
              <span className="text-4xl mr-4">🛡️</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                  Elo Sec Platform
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Self-hosted network security and infrastructure monitoring system running on Raspberry Pi. 
                  Features DNS filtering (Pi-hole), VPN (WireGuard), intrusion prevention (fail2ban), real-time 
                  monitoring (Grafana), and containerized services. Actively blocks 1,500+ malicious connection 
                  attempts weekly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                    Network Security
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                    Infrastructure Monitoring
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                    Self-Hosted
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* CIS Compliance Checker - Secondary Featured */}
          <Link
            to="/project/cis-compliance"
            className="block bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 transition-all shadow-lg hover:shadow-xl"
          >
            <div className="flex items-start">
              <span className="text-4xl mr-4">✅</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-green-700 dark:text-green-400">
                  CIS Benchmark Compliance Checker
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Custom Python tool for automated security compliance assessment against CIS benchmarks. 
                  Scans SSH configuration, password policies, filesystem security, and services. Generates 
                  professional HTML reports with remediation guidance. Improved system compliance from 63.6% to 100%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                    Security Automation
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                    CIS Benchmarks
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                    System Hardening
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700">
                    100% Compliance
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Project Categories */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">All Projects by Category</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition-all border border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;
