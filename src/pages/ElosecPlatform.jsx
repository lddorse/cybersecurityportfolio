import React from 'react';
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const ElosecPlatform = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Elo Sec Platform</h1>
        <p className="text-xl text-gray-700 mb-4">
          Self-Hosted Network Security & Infrastructure Monitoring
        </p>
        
        {/* Live Service Links */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
          <p className="font-semibold text-blue-900 mb-2">Live Platform Links:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="https://status.leodorsey.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              🔴 Status Dashboard
            </a>
            <a href="https://grafana.elosec.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              📊 Monitoring Dashboard
            </a>
            <a href="https://pihole.elosec.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              🛡️ Security Portal
            </a>
            <a href="https://elosec.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              🌐 Landing Page
            </a>
          </div>
          <p className="text-xs text-gray-600 mt-2">All services running 24/7 on production hardware</p>
        </div>

        <div className="flex gap-4 mb-4">
          <a 
            href="https://elosec.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Live Platform
          </a>
          <a 
            href="https://status.leodorsey.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Status Dashboard
          </a>
        </div>
      </div>

      {/* Screenshot - Landing Page */}
      <div className="mb-8">
        <img 
          src="/images/elosec/elosec-landing.png" 
          alt="Elo Sec Landing Page" 
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Overview */}
      <section className="mb-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          Elo Sec blocked <strong>1,518 intrusion attempts last week</strong> from Russian and UK botnets—running 
          entirely on a $50 Raspberry Pi. This project demonstrates how enterprise-grade security can be deployed 
          on resource-constrained hardware while maintaining production-level protection and comprehensive monitoring capabilities.
        </p>
        <p className="text-gray-700">
          The platform combines DNS filtering, VPN access, intrusion prevention, and real-time monitoring into a 
          cohesive security ecosystem that provides quantifiable protection against real-world threats.
        </p>
      </section>

      {/* The Problem */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700 mb-4">
            Modern networks face constant threats from automated attacks, botnets, and malicious actors. Small businesses 
            and home networks often lack the resources for enterprise security solutions, leaving critical infrastructure 
            vulnerable. Even small-scale infrastructure is under continuous attack—sophisticated botnets probe defenses 
            24/7, looking for vulnerabilities.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="font-semibold text-blue-900">Real-world Impact:</p>
            <p className="text-gray-700">
              This platform provides concrete evidence of the threat landscape, blocking genuine attacks and providing 
              forensic data on attacker behavior, origins, and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Active Threats Blocked */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Active Threats Blocked</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700 mb-4">Recent intrusion attempts automatically blocked by the platform:</p>
          
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Source IP</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Origin</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Attack Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Attempts Blocked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">91.202.233.33</td>
                  <td className="border border-gray-300 px-4 py-2">Russia</td>
                  <td className="border border-gray-300 px-4 py-2">SSH Brute-Force</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold text-red-600">687 attempts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">45.135.232.92</td>
                  <td className="border border-gray-300 px-4 py-2">Russia</td>
                  <td className="border border-gray-300 px-4 py-2">Credential Stuffing</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold text-red-600">602 attempts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">23.132.164.113</td>
                  <td className="border border-gray-300 px-4 py-2">UK</td>
                  <td className="border border-gray-300 px-4 py-2">Automated Scanning</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold text-red-600">229 attempts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4">
            <p className="font-semibold text-red-900">Total blocked in last 7 days: 1,518 intrusion attempts</p>
            <p className="text-sm text-gray-700 mt-2">
              These aren't theoretical threats—they're real attackers attempting to compromise the infrastructure 
              every single day. Without active defense, any one of these attacks could succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot - Threat Intelligence */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Threat Intelligence Example</h3>
        <img 
          src="/images/elosec/threat-intelligence.png" 
          alt="IP Threat Analysis" 
          className="rounded-lg shadow-lg w-full"
        />
        <p className="text-sm text-gray-600 mt-2">
          Real-time threat intelligence showing residential proxy with critical risk score
        </p>
      </div>

      {/* Technical Architecture */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
        
        {/* Defense in Depth Diagram */}
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Security Architecture: Defense in Depth</h3>
          <div className="bg-white p-4 rounded border-2 border-gray-300">
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`Internet → Firewall (UFW) → Intrusion Prevention (Fail2ban) → Network Services
                ↓
         DNS Filtering (Pi-hole) → Protected Devices
                ↓
         Remote Access (WireGuard VPN) → Encrypted Tunnel`}
            </pre>
          </div>
        </div>

        {/* Infrastructure Foundation */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold mb-3">Infrastructure Foundation</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Hardware:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Raspberry Pi 4 (8GB RAM)</li>
              <li>Running Raspberry Pi OS (Debian-based)</li>
              <li>Always-on, low-power consumption (~3-5W)</li>
              <li>128GB SSD for improved I/O performance</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-gray-800 mb-2">Why Raspberry Pi?</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Demonstrates efficiency and resourcefulness</li>
              <li>Proves enterprise concepts work on constrained hardware</li>
              <li>Cost-effective for continuous operation (~$2/month electricity)</li>
              <li>Realistic for small business deployment scenarios</li>
              <li>Shows ability to optimize for resource constraints</li>
            </ul>
          </div>
        </div>

        {/* Core Security Components */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Core Security Components</h3>
          
          {/* Pi-hole */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded mr-3 text-sm">DNS</span>
              Pi-hole: Network-Wide DNS Filtering & Threat Intelligence
            </h4>
            <p className="text-gray-700 mb-3">
              DNS sinkhole that blocks malicious domains, ads, and trackers at the network level before they can reach any device
            </p>
            
            {/* Pi-hole Screenshot */}
            <div className="mb-4">
              <img 
                src="/images/elosec/pihole-dashboard.png" 
                alt="Pi-hole Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-600 mt-2">Pi-hole dashboard showing 79,811 domains on blocklists</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-3">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Current Statistics:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>79,811 domains on blocklists</li>
                  <li>1,496 queries processed recently</li>
                  <li>2 active clients monitored</li>
                  <li>DNSSEC validation enabled</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Security Benefits:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Malware Protection: Blocks malware distribution sites</li>
                  <li>Phishing Prevention: Stops fraudulent domains</li>
                  <li>C&C Blocking: Prevents compromised device callbacks</li>
                  <li>Data Exfiltration Prevention: Blocks tracking domains</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-3 text-sm">
              <p className="text-gray-700">
                <strong>Business Value:</strong> Network-wide protection without per-device software, reducing 
                management overhead while increasing security coverage.
              </p>
            </div>
          </div>

          {/* WireGuard */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded mr-3 text-sm">VPN</span>
              WireGuard: Secure Remote Access
            </h4>
            <p className="text-gray-700 mb-3">
              Modern, cryptographically secure VPN providing encrypted tunnel for remote network access
            </p>

            {/* WireGuard Screenshot */}
            <div className="mb-4">
              <img 
                src="/images/elosec/wireguard.png" 
                alt="WireGuard Interface" 
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-600 mt-2">WireGuard admin interface</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Cryptographic Implementation:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>ChaCha20 encryption with Poly1305 authentication</li>
                  <li>Curve25519 for key exchange</li>
                  <li>Perfect Forward Secrecy</li>
                  <li>Split-tunnel configuration</li>
                  <li>Mobile client support (iOS/Android)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Why WireGuard?</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>4,000 lines vs 400,000+ (OpenVPN)</li>
                  <li>Built into Linux kernel</li>
                  <li>2-3x faster than OpenVPN on Pi</li>
                  <li>Smaller attack surface</li>
                  <li>Superior mobile roaming support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fail2ban */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded mr-3 text-sm">IPS</span>
              Fail2ban: Automated Intrusion Prevention
            </h4>
            <p className="text-gray-700 mb-3">
              Analyzes logs in real-time and automatically bans IP addresses showing malicious behavior
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-3">
              <p className="font-semibold text-yellow-900">Active Protection:</p>
              <p className="text-gray-700">
                Tracks and blocks 1,500+ malicious connection attempts per week, demonstrating the constant threat landscape.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Active Jails:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>SSH: 5 failed attempts = 10 minute ban</li>
                  <li>HTTP Authentication: Protects admin interfaces</li>
                  <li>WireGuard: Prevents handshake flooding</li>
                  <li>Nginx: Blocks aggressive scanning</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Benefits:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Automated response within seconds</li>
                  <li>Reduces server load from repeated attempts</li>
                  <li>Provides forensic data on attack patterns</li>
                  <li>Zero manual intervention required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UFW Firewall */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-purple-500 text-white px-3 py-1 rounded mr-3 text-sm">FIREWALL</span>
              UFW: Platform Security Hardening
            </h4>
            <p className="text-gray-700 mb-3">
              Protects the Elo Sec platform itself with defense-in-depth firewall rules on the Raspberry Pi
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Default-deny inbound policy with stateful filtering</li>
              <li>Rate limiting on exposed services</li>
              <li>Port-specific rules (SSH, HTTP/HTTPS, DNS, WireGuard)</li>
              <li>Logging enabled for security events and forensic analysis</li>
              <li>Integration with fail2ban for dynamic IP blocking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Monitoring Stack */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Monitoring & Observability Stack</h2>
        <div className="space-y-6">
          
          {/* Grafana */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-blue-500 text-white px-3 py-1 rounded mr-3 text-sm">METRICS</span>
              Grafana: Real-Time Infrastructure Monitoring
            </h4>
            <p className="text-gray-700 mb-3">
              Centralized visualization platform for all infrastructure metrics, providing real-time insights and historical analysis
            </p>

            {/* Grafana Screenshots */}
            <div className="space-y-4 mb-4">
              <div>
                <img 
                  src="/images/elosec/grafana-system.png" 
                  alt="Grafana System Dashboard" 
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Grafana dashboard showing 86 running containers, 21.2% memory usage, 12.7% CPU
                </p>
              </div>
              <div>
                <img 
                  src="/images/elosec/grafana-node-exporter.png" 
                  alt="Grafana Node Exporter" 
                  className="rounded-lg shadow-lg w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Detailed system metrics from Node Exporter showing CPU, memory, and disk performance
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Data Sources:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Prometheus (time-series metrics database)</li>
                  <li>Node Exporter (system-level metrics)</li>
                  <li>Pi-hole API (DNS query statistics)</li>
                  <li>Custom exporters (fail2ban, service health)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Monitored Metrics:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>System resources (CPU, RAM, disk, temperature)</li>
                  <li>Network traffic and bandwidth patterns</li>
                  <li>DNS query rates and blocked domains</li>
                  <li>Firewall events and intrusion attempts</li>
                  <li>Container resource usage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Uptime Kuma */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded mr-3 text-sm">STATUS</span>
              Uptime Kuma: Public Service Monitoring
            </h4>
            <p className="text-gray-700 mb-3">
              Multi-protocol service health monitoring with public-facing status page for transparency
            </p>

            {/* Uptime Kuma Screenshot */}
            <div className="mb-4">
              <img 
                src="/images/elosec/uptime-kuma.png" 
                alt="Uptime Kuma Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                Uptime Kuma showing service status - 4 services up, 99%+ uptime across the board
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">Monitored Services:</p>
              <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-700">
                <div>• Blog (WordPress): 99.38%</div>
                <div>• Pi-hole Admin: 99.09%</div>
                <div>• Pi-hole DNS: 100%</div>
                <div>• Uptime Kuma (Self): 99.09%</div>
                <div>• SSL certificate expiration</div>
                <div>• Response time tracking</div>
              </div>
            </div>
          </div>

          {/* Portainer */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded mr-3 text-sm">CONTAINERS</span>
              Portainer: Container Orchestration & Management
            </h4>
            <p className="text-gray-700 mb-3">
              Web-based Docker management interface providing visual control over all containerized services
            </p>

            {/* Portainer Screenshot */}
            <div className="mb-4">
              <img 
                src="/images/elosec/portainer.png" 
                alt="Portainer Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                Portainer showing 2 stacks, 26 containers, 49 volumes, 4 CPU cores, 8.2GB RAM
              </p>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Visual container monitoring and resource tracking</li>
              <li>Real-time logs and console access</li>
              <li>Stack deployment from docker-compose files</li>
              <li>Image management and updates</li>
              <li>Role-based access control (RBAC)</li>
              <li>Currently managing 26 containers across 2 stacks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Web Services */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Web Services & Infrastructure</h2>
        <div className="space-y-6">
          
          {/* Nginx */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Nginx: Reverse Proxy & TLS Termination</h4>
            <p className="text-gray-700 mb-3">
              High-performance web server handling all HTTP/HTTPS traffic, routing requests to appropriate backend services
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Security Configuration:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>TLS 1.3 with strong cipher suites</li>
                  <li>HTTP/2 enabled for performance</li>
                  <li>HSTS enforced (HTTP Strict Transport Security)</li>
                  <li>Rate limiting to prevent abuse</li>
                  <li>Security headers (CSP, X-Frame-Options)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Proxied Services:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>elosec.tech → Landing page</li>
                  <li>pihole.elosec.tech → Pi-hole admin</li>
                  <li>grafana.elosec.tech → Grafana dashboards</li>
                  <li>status.elosec.tech → Uptime Kuma</li>
                  <li>portainer.elosec.tech → Portainer UI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Let's Encrypt */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Let's Encrypt: Automated Certificate Management</h4>
            <p className="text-gray-700 mb-3">
              Free, automated SSL/TLS certificates with 90-day rotation and DNS-based verification
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Wildcard certificates for *.elosec.tech subdomains</li>
              <li>Automated renewal 30 days before expiration</li>
              <li>OCSP stapling for revocation checking</li>
              <li>Zero downtime renewals</li>
              <li>Grafana monitoring for expiration dates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Current Metrics */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Current Performance Metrics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-2xl font-bold text-green-700">1,518</p>
            <p className="text-sm text-gray-700">Blocked intrusions (last 7 days)</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-2xl font-bold text-blue-700">79,811</p>
            <p className="text-sm text-gray-700">Domains on blocklists</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <p className="text-2xl font-bold text-purple-700">99.38%</p>
            <p className="text-sm text-gray-700">Pi-hole uptime</p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-2xl font-bold text-yellow-700">26</p>
            <p className="text-sm text-gray-700">Running containers</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-2xl font-bold text-red-700">21.2%</p>
            <p className="text-sm text-gray-700">Memory usage</p>
          </div>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p className="text-2xl font-bold text-indigo-700">3-5W</p>
            <p className="text-sm text-gray-700">Power consumption</p>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills Demonstrated</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Cybersecurity & Risk Management</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Threat Detection & Response</li>
              <li>Defense-in-Depth Architecture</li>
              <li>Incident Response & Forensics</li>
              <li>Security Monitoring</li>
              <li>Cryptography (VPN, TLS/SSL)</li>
              <li>Access Control & Zero-Trust</li>
              <li>Vulnerability Management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-green-700">DevOps & Infrastructure</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Linux System Administration</li>
              <li>Docker Containerization</li>
              <li>Infrastructure as Code</li>
              <li>Monitoring (Prometheus/Grafana)</li>
              <li>Service Orchestration (Docker Compose)</li>
              <li>Reverse Proxy Configuration</li>
              <li>Resource Optimization</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Networking & Protocols</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>TCP/IP Fundamentals</li>
              <li>DNS Protocol & Security</li>
              <li>VPN Technologies (WireGuard)</li>
              <li>Firewall Rule Design</li>
              <li>TLS/SSL Protocols</li>
              <li>HTTP/2 Optimization</li>
              <li>Network Troubleshooting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lessons Learned & Challenges Overcome</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-3">Technical Challenges:</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-800">1. Resource Optimization</p>
              <p className="text-sm text-gray-700">
                <strong>Challenge:</strong> Running 26 containers on 8GB RAM with stable performance<br/>
                <strong>Solution:</strong> Careful memory limits per container, swap configuration, service prioritization<br/>
                <strong>Learning:</strong> Ability to work within constraints common in cost-sensitive environments
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">2. DNS Complexity</p>
              <p className="text-sm text-gray-700">
                <strong>Challenge:</strong> Understanding recursive DNS, forwarding, DNSSEC validation, and DoH<br/>
                <strong>Solution:</strong> Methodical learning of DNS protocol stack and testing with dig/nslookup<br/>
                <strong>Learning:</strong> Deep understanding of critical internet infrastructure protocol
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">3. Certificate Automation</p>
              <p className="text-sm text-gray-700">
                <strong>Challenge:</strong> Wildcard certificates require DNS-01 validation, not simple HTTP-01<br/>
                <strong>Solution:</strong> Configured DNS API access for automated TXT record updates<br/>
                <strong>Learning:</strong> Advanced Let's Encrypt use cases beyond basic web hosting
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3 mt-6">Best Practices Adopted:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>✅ Test Before Production: All configuration changes tested in isolated environment first</li>
            <li>✅ Monitor Everything: Instrumentation added before making infrastructure changes</li>
            <li>✅ Document Relentlessly: Configuration files, troubleshooting steps, architecture decisions documented</li>
            <li>✅ Version Control: All configuration files in Git with descriptive commit messages</li>
            <li>✅ Automated Backups: Regular backups of configurations, certificates, and data</li>
            <li>✅ Security by Default: Default-deny firewall, minimal exposure, regular updates</li>
            <li>✅ Layered Defense: Never rely on single security control—always implement defense-in-depth</li>
          </ul>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planned Enhancements</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Short-Term (Next 3 Months):</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li><strong>IDS/IPS Integration:</strong> Deploy Suricata for deep packet inspection</li>
                <li><strong>Enhanced Alerting:</strong> Implement Alertmanager with PagerDuty/Slack integration</li>
                <li><strong>Automated Backups:</strong> Scheduled encrypted backups to Backblaze B2 or AWS S3</li>
                <li><strong>Network Segmentation:</strong> VLAN configuration to isolate IoT devices</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Medium-Term (3-6 Months):</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li><strong>SIEM Implementation:</strong> Deploy Wazuh or Elastic SIEM for log correlation</li>
                <li><strong>Honeypot Deployment:</strong> Cowrie SSH honeypot to study attacker TTPs</li>
                <li><strong>Threat Intelligence:</strong> Integration with AlienVault OTX or MISP feeds</li>
                <li><strong>High Availability:</strong> Second Pi in failover configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-700 mb-4">
          Elo Sec represents a comprehensive, production-grade security platform that proves enterprise concepts can be 
          implemented on minimal hardware without sacrificing protection or observability. The platform doesn't just 
          simulate security—it actively defends against <strong>1,518 real intrusion attempts weekly</strong> from global 
          botnets and malicious actors.
        </p>
        <p className="text-gray-700 mb-4">This project demonstrates:</p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
          <li><strong>Technical Competence:</strong> Deep understanding of security tools, networking, and Linux administration</li>
          <li><strong>Business Acumen:</strong> Cost-effective security solutions with quantifiable results</li>
          <li><strong>Problem-Solving:</strong> Overcame resource constraints through research and iteration</li>
          <li><strong>Real-World Impact:</strong> Measurable protection against genuine threats, not theoretical scenarios</li>
        </ul>
        <p className="text-gray-700">
          The skills showcased here translate directly to enterprise environments—the same architecture patterns, security 
          principles, and monitoring strategies apply whether managing a Raspberry Pi or a multi-region AWS deployment.
        </p>
      </section>

      {/* Contact */}
      <div className="text-center bg-gray-100 p-6 rounded-lg">
        <p className="text-gray-600 mb-2">
          Questions about this project? Contact me at{' '}
          <a href="mailto:lddorse@gmail.com" className="text-blue-600 hover:underline">
            lddorse@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-500">Last Updated: January 6, 2026 • Platform Status: ✅ Active & Monitoring</p>
      </div>
    </FixedCardLayout>
  );
};

export default ElosecPlatform;
