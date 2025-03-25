const Projects = () => {
    return (
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Internal Vulnerability Assessment Simulation
            </h3>
            <p className="text-gray-700 mb-4">
              Simulated an internal network scan using OpenVAS and Nmap, identified vulnerabilities,
              and developed a remediation report. Demonstrated skills in scanning, analysis, and
              audit-ready documentation.
            </p>
            <a
              href="/project/internal-vuln"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
  
          {/* Project 2 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Risk Assessment and Information Gathering
            </h3>
            <p className="text-gray-700 mb-4">
              Performed a full organizational risk assessment by identifying assets, gathering intelligence, and analyzing threats. Delivered risk scores and mitigation strategies aligned with NIST standards. Demonstrated skills in threat modeling, risk analysis, and strategic reporting.
            </p>
            <a
              href="/project/risk-assessment"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
  
          {/* Project 3 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Phishing Simulation and User Awareness Training
            </h3>
            <p className="text-gray-700 mb-4">
              Simulated phishing attacks using Gophish to evaluate user susceptibility, tracked engagement metrics, and developed training content to reduce risk. Demonstrated skills in social engineering awareness, reporting, and user education strategies.
            </p>
            <a
              href="/project/phishing-simulation"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
  
          {/* Project 4 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Security Policy Development and Enforcement
            </h3>
            <p className="text-gray-700 mb-4">
              Developed and implemented core security policies aligned with industry frameworks. Created documentation for acceptable use, passwords, access control, and BYOD. Strengthened compliance readiness and improved user awareness through clear policy enforcement.
            </p>
            <a
              href="/project/security-policy"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>

          {/* Project 5 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
            Issue Resolution and Root Cause Analysis
            </h3>
            <p className="text-gray-700 mb-4">
              Investigated a recurring system failure, identified the root cause through log analysis and interviews, and implemented a long-term fix. Demonstrated skills in troubleshooting, RCA methodology, and post-incident documentation.
            </p>
            <a
              href="/project/issue-resolution"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>

           {/* Project 6 */}
           <div className="bg-gray-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
            Security Control Implementation
            </h3>
            <p className="text-gray-700 mb-4">
            Implemented key technical and administrative security controls to reduce organizational risk. Aligned implementations with NIST and CIS benchmarks. Demonstrated skills in practical hardening, access management, and baseline configuration.
            </p>
            <a
              href="/project/security-control"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  