import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const CISComplianceProject = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        CIS Benchmark Compliance Checker & System Hardening
      </h1>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Built a Python-based automated compliance checker to evaluate system security against CIS (Center for Internet Security) 
          benchmarks. The tool scans SSH configuration, password policies, filesystem security, and system services, generating 
          detailed HTML reports with actionable remediation steps. Applied systematic security hardening that improved compliance 
          from <strong>63.6% to 100%</strong>, demonstrating measurable security improvements through automated assessment and remediation.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Results at a Glance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4 rounded">
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">63.6%</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Initial Compliance</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">7 pass, 1 fail, 3 warnings</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-4 rounded">
            <p className="text-3xl font-bold text-green-700 dark:text-green-400">100%</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Final Compliance</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">11 pass, 0 fail, 0 warnings</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-600 p-4 rounded">
            <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">+36.4%</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Improvement</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Zero failures achieved</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Objectives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Build automated tool to assess system compliance against CIS benchmarks</li>
          <li>Identify security gaps in SSH configuration, password policies, filesystem, and services</li>
          <li>Generate professional HTML reports with color-coded findings and remediation guidance</li>
          <li>Systematically apply security hardening measures to achieve full compliance</li>
          <li>Document the improvement process with measurable before/after metrics</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tool Architecture</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600 mb-4">
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`cis-compliance-checker/
├── checker.py              # Main orchestrator
├── checks/                 # Modular check categories
│   ├── ssh.py             # SSH configuration (5 checks)
│   ├── passwords.py       # Password policies (4 checks)
│   ├── filesystem.py      # Filesystem security (1 check)
│   └── services.py        # System services (1 check)
├── templates/
│   └── report.html        # Jinja2 HTML template
├── reports/               # Generated compliance reports
└── requirements.txt       # Python dependencies`}
          </pre>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          The tool uses a modular architecture with separate check categories, Jinja2 templating for professional 
          HTML reports, and subprocess calls for system inspection. Each check returns structured data (pass/fail/warning) 
          with specific remediation guidance.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Security Checks Implemented</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 dark:border-blue-600 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">SSH Configuration (5 checks)</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
              <li>• SSH Protocol 2 enforcement</li>
              <li>• Root login disabled</li>
              <li>• Empty passwords prohibited</li>
              <li>• X11 forwarding disabled</li>
              <li>• MaxAuthTries limited to 4</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 dark:border-green-600 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Password Policy (4 checks)</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
              <li>• Password expiration (90 days or less)</li>
              <li>• Minimum length (14+ characters)</li>
              <li>• Complexity requirements (libpam-pwquality)</li>
              <li>• Password reuse limitation (remember last 5)</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 dark:border-purple-600 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Filesystem Security (1 check)</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
              <li>• /tmp mounted with noexec option</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 dark:border-orange-600 pl-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">System Services (1 check)</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
              <li>• UFW firewall enabled and active</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Remediation Process</h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Initial Scan Results (63.6%)</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li><span className="text-red-600 dark:text-red-400">✗ FAIL:</span> SSH Protocol not explicitly set to 2</li>
              <li><span className="text-yellow-600 dark:text-yellow-400">⚠ WARNING:</span> Minimum password length below 14 characters</li>
              <li><span className="text-yellow-600 dark:text-yellow-400">⚠ WARNING:</span> /tmp not mounted with noexec</li>
              <li><span className="text-yellow-600 dark:text-yellow-400">⚠ WARNING:</span> Firewall check not properly implemented</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-4 rounded">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Systematic Fixes Applied</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>1. SSH Hardening:</strong><br/>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">echo "Protocol 2" >> /etc/ssh/sshd_config</code>
              </li>
              <li>
                <strong>2. Password Policy:</strong><br/>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">sed -i 's/^#PASS_MIN_LEN/PASS_MIN_LEN 14/' /etc/login.defs</code>
              </li>
              <li>
                <strong>3. Filesystem Security:</strong><br/>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">echo "tmpfs /tmp tmpfs defaults,noexec,nosuid,nodev 0 0" >> /etc/fstab</code>
              </li>
              <li>
                <strong>4. Tool Enhancement:</strong><br/>
                Fixed hardcoded checks to properly detect UFW status and filesystem mounts
              </li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-4 rounded">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Final Results (100%)</h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li><span className="text-green-600 dark:text-green-400">✓ PASS:</span> All 11 checks passing</li>
              <li><span className="text-green-600 dark:text-green-400">✓ PASS:</span> Zero failures</li>
              <li><span className="text-green-600 dark:text-green-400">✓ PASS:</span> Zero warnings</li>
              <li><span className="text-green-600 dark:text-green-400">✓ PASS:</span> Full CIS compliance achieved</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Tools & Technologies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Python 3:</strong> Core scripting language with subprocess for system inspection</li>
          <li><strong>Jinja2:</strong> Template engine for professional HTML report generation</li>
          <li><strong>CIS Benchmarks:</strong> Industry-standard security configuration guidelines</li>
          <li><strong>Linux System Administration:</strong> SSH, PAM, filesystem configuration, UFW</li>
          <li><strong>Virtual Environment:</strong> Isolated Python environment for dependency management</li>
          <li><strong>Raspberry Pi OS (Debian):</strong> Target system for compliance scanning</li>
        </ul>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Screenshots</h2>
        <div className="space-y-4">
          <div>
            <img src="/images/cis-report-before.png" alt="CIS Compliance Report - Before" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Initial compliance report showing 63.6% compliance with identified gaps</p>
          </div>
          <div>
            <img src="/images/cis-report-after.png" alt="CIS Compliance Report - After" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Final compliance report showing 100% compliance - all checks passing</p>
          </div>
          <div>
            <img src="/images/cis-tool-terminal.png" alt="CIS Tool Terminal Output" className="rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Terminal output showing the tool in action with scan progress</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Automation Value:</strong> Automated compliance checking saves time and ensures consistency compared to manual audits</li>
          <li><strong>Measurable Impact:</strong> 36.4% improvement demonstrates tangible security enhancement</li>
          <li><strong>Systematic Approach:</strong> Methodical remediation of each finding prevents oversight and ensures comprehensive coverage</li>
          <li><strong>Industry Standards:</strong> CIS benchmarks provide proven, vendor-neutral security baselines</li>
          <li><strong>Documentation:</strong> Professional reports make findings actionable for technical and non-technical stakeholders</li>
          <li><strong>Continuous Monitoring:</strong> Tool can be scheduled for regular compliance verification</li>
        </ul>
      </section>

      <section className="mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Portfolio Note</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          This project was deployed on the live Elo Sec platform (Raspberry Pi 4) running Raspberry Pi OS. 
          All compliance checks, remediations, and results represent actual system hardening applied to production infrastructure. 
          The tool demonstrates practical application of security automation, benchmark compliance, and systematic risk reduction 
          in a real-world environment.
        </p>
      </section>

      <section className="mb-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a href="https://github.com/lddorse/cis-compliance-checker" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">View Source Code on GitHub</a>
          </li>
          <li>
            <a href="/reports/cis-compliance-100percent.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">View 100% Compliance Report</a>
          </li>
          <li>
            <a href="https://www.cisecurity.org/cis-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">CIS Benchmarks Documentation</a>
          </li>
        </ul>
      </section>
    </FixedCardLayout>
  );
};

export default CISComplianceProject;
