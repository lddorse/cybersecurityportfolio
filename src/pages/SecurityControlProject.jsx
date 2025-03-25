const SecurityControlProject = () => {
    return (
      <div className="min-h-screen bg-gray-200 pt-40 px-4 py-10 flex justify-center">
        <div className="bg-white max-w-3xl w-full p-8 rounded-lg shadow-lg text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Security Control Implementation</h1>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
          <p>
            Implemented key technical and administrative security controls to reduce organizational risk.
            Aligned implementations with NIST and CIS benchmarks. Demonstrated skills in practical hardening,
            access management, and baseline configuration.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Objectives</h2>
          <ul className="list-disc pl-6">
            <li>Enforce baseline security controls across systems</li>
            <li>Ensure alignment with NIST and CIS security frameworks</li>
            <li>Harden system configuration and improve audit readiness</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Tools & Techniques</h2>
          <ul className="list-disc pl-6">
            <li>Group Policy Editor, Active Directory, Firewalld/iptables</li>
            <li>CIS Benchmarks, MFA integrations, system logs</li>
            <li>Role-based access control (RBAC), password policies</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots</h2>
          <img src="/images/GroupPolicy_Screenshot.png" alt="Group Policy Screenshot" className="my-4" />
          <img src="/images/MFA_Enforcement_Screenshot.png" alt="MFA Enforcement Screenshot" className="my-4" />
  
          <h2 className="text-xl font-semibold mt-6 mb-2">Resources</h2>
          <ul className="list-disc pl-6">
            <li>
              <a
                href="/images/LeoDorsey_SecurityControlImplementation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Download Report (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default SecurityControlProject;
  