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

      {/* Overview */}
      <section className="mb-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          Elo Sec is a comprehensive, self-hosted security and infrastructure monitoring platform built to demonstrate 
          enterprise-level cybersecurity capabilities in a home lab environment. The platform runs entirely on a 
          Raspberry Pi 4, showcasing the ability to deploy production-grade security tools on resource-constrained 
          hardware while maintaining robust protection and monitoring capabilities.
        </p>
      </section>

      {/* The Problem */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700 mb-4">
            Modern networks face constant threats from automated attacks, botnets, and malicious actors. Small businesses 
            and home networks often lack the resources for enterprise security solutions, leaving critical infrastructure 
            vulnerable. This project demonstrates how to build comprehensive security monitoring and protection using 
            open-source tools and minimal hardware investment.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="font-semibold text-blue-900">Real-world Impact:</p>
            <p className="text-gray-700">
              The platform currently blocks <strong>1,500+ intrusion attempts weekly</strong>, providing quantifiable 
              evidence of active threats against even small-scale infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
        
        {/* Infrastructure Foundation */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold mb-3">Infrastructure Foundation</h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Hardware:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Raspberry Pi 4 (4GB RAM)</li>
              <li>Running Raspberry Pi OS (Debian-based)</li>
              <li>Always-on, low-power consumption (~3-5W)</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-gray-800 mb-2">Why Raspberry Pi?</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Demonstrates efficiency and resourcefulness</li>
              <li>Proves enterprise concepts work on constrained hardware</li>
              <li>Cost-effective for continuous operation</li>
              <li>Realistic for small business deployment scenarios</li>
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
              Pi-hole: Network-Wide DNS Filtering
            </h4>
            <p className="text-gray-700 mb-3">
              DNS sinkhole that blocks malicious domains, ads, and trackers at the network level
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Configuration:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>79,000+ domains on blocklists</li>
                  <li>Real-time query logging and analytics</li>
                  <li>Client-specific monitoring</li>
                  <li>DNSSEC validation enabled</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Security Benefits:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Protects against phishing domains</li>
                  <li>Blocks malware C2 servers</li>
                  <li>Prevents data exfiltration</li>
                  <li>Forces encrypted DNS queries</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WireGuard */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded mr-3 text-sm">VPN</span>
              WireGuard: Secure Remote Access
            </h4>
            <p className="text-gray-700 mb-3">
              Modern, cryptographically secure VPN for remote network access
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Technology:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>ChaCha20 encryption with Poly1305 authentication</li>
                  <li>Curve25519 for key exchange</li>
                  <li>Split-tunnel configuration</li>
                  <li>Mobile client support (iOS/Android)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Why WireGuard?</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>4000+ lines vs 400,000+ (OpenVPN)</li>
                  <li>Built into Linux kernel</li>
                  <li>Modern cryptographic primitives</li>
                  <li>Smaller attack surface</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fail2ban */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded mr-3 text-sm">IPS</span>
              Fail2ban: Intrusion Prevention System
            </h4>
            <p className="text-gray-700 mb-3">
              Automatically bans IPs showing malicious behavior
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-3">
              <p className="font-semibold text-yellow-900">Active Protection:</p>
              <p className="text-gray-700">
                Tracks and blocks 1,500+ malicious connection attempts per week, demonstrating the constant threat landscape.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Configuration:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>SSH brute-force protection (5 attempts = 10min ban)</li>
                  <li>HTTP authentication monitoring</li>
                  <li>WireGuard handshake flood prevention</li>
                  <li>Email alerts for ban events</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Benefits:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Reactive defense against active attacks</li>
                  <li>Reduces server load from repeated attempts</li>
                  <li>Provides forensic data on attack patterns</li>
                  <li>Automatic firewall blocking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UFW Firewall */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-purple-500 text-white px-3 py-1 rounded mr-3 text-sm">FIREWALL</span>
              UFW: Network Perimeter Defense
            </h4>
            <p className="text-gray-700 mb-3">
              iptables-based firewall managing all network traffic
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Default-deny inbound policy</li>
              <li>Rate limiting on exposed services</li>
              <li>Port-specific rules (SSH, HTTP/HTTPS, DNS, WireGuard)</li>
              <li>Logging enabled for security events</li>
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
              Grafana: Real-Time Visualization & Dashboards
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Data Sources:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Prometheus (metrics database)</li>
                  <li>Node Exporter (system metrics)</li>
                  <li>Pi-hole API (DNS metrics)</li>
                  <li>Custom exporters for security events</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Monitored Metrics:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>System resources (CPU, RAM, disk, temp)</li>
                  <li>Network traffic and bandwidth</li>
                  <li>DNS query rates and blocked domains</li>
                  <li>Firewall events and intrusion attempts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Uptime Kuma */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-green-500 text-white px-3 py-1 rounded mr-3 text-sm">STATUS</span>
              Uptime Kuma: Service Health Monitoring
            </h4>
            <p className="text-gray-700 mb-3">
              Public-facing status page and internal service monitoring
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-gray-800 mb-2">Monitored Services:</p>
              <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-700">
                <div>• Pi-hole Admin Interface</div>
                <div>• Pi-hole DNS Service</div>
                <div>• WireGuard VPN endpoint</div>
                <div>• Uptime Kuma (Self-monitoring)</div>
                <div>• SSL certificate expiration</div>
                <div>• Response time tracking</div>
              </div>
            </div>
          </div>

          {/* Portainer */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded mr-3 text-sm">CONTAINERS</span>
              Portainer: Container Orchestration UI
            </h4>
            <p className="text-gray-700 mb-3">
              Docker management interface for all containerized services
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Visual container monitoring and resource tracking</li>
              <li>Easy deployment and updates</li>
              <li>Role-based access control</li>
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
            <h4 className="text-lg font-semibold mb-2">Nginx: Reverse Proxy & Web Server</h4>
            <p className="text-gray-700 mb-3">
              Handles all HTTP/HTTPS traffic and routes to backend services
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Configuration:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>TLS 1.3 with strong cipher suites</li>
                  <li>HTTP/2 enabled for performance</li>
                  <li>Rate limiting to prevent abuse</li>
                  <li>Security headers (HSTS, CSP, X-Frame-Options)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Proxied Services:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>elosec.tech → Landing page</li>
                  <li>pihole.elosec.tech → Pi-hole admin</li>
                  <li>grafana.elosec.tech → Grafana dashboards</li>
                  <li>status.elosec.tech → Uptime Kuma</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Let's Encrypt */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Let's Encrypt: Automated SSL/TLS Certificates</h4>
            <p className="text-gray-700 mb-3">
              Free, automated certificate management
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Automatic renewal (90-day certificates)</li>
              <li>Wildcard certificates for subdomains</li>
              <li>OCSP stapling for performance</li>
              <li>Demonstrates proper PKI practices</li>
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
            <p className="text-2xl font-bold text-red-700">19.9%</p>
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
            <h3 className="text-lg font-semibold mb-3 text-blue-700">Cybersecurity</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Network security architecture design</li>
              <li>Defense-in-depth implementation</li>
              <li>Intrusion detection and prevention</li>
              <li>Firewall configuration</li>
              <li>VPN deployment and cryptography</li>
              <li>DNS security best practices</li>
              <li>SSL/TLS certificate management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-green-700">DevOps/Infrastructure</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Linux system administration</li>
              <li>Docker containerization</li>
              <li>Reverse proxy configuration (Nginx)</li>
              <li>Infrastructure as Code principles</li>
              <li>Monitoring (Prometheus/Grafana)</li>
              <li>Service orchestration (Docker Compose)</li>
              <li>Resource optimization</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-purple-700">Networking</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>TCP/IP fundamentals</li>
              <li>DNS protocol and security</li>
              <li>VPN technologies (WireGuard)</li>
              <li>Firewall rule design (iptables/UFW)</li>
              <li>Reverse proxy concepts</li>
              <li>TLS/SSL protocols</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planned Enhancements</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li><strong>IDS/IPS Integration:</strong> Suricata for deep packet inspection</li>
                <li><strong>SIEM Implementation:</strong> Wazuh or Security Onion for centralized event management</li>
                <li><strong>Honeypot Deployment:</strong> Cowrie SSH honeypot to analyze attacker techniques</li>
                <li><strong>Automated Backups:</strong> Scheduled encrypted backups to cloud storage</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li><strong>High Availability:</strong> Failover Pi-hole setup for redundancy</li>
                <li><strong>Threat Intelligence:</strong> Integration with AlienVault OTX</li>
                <li><strong>Network Segmentation:</strong> VLAN configuration for IoT device isolation</li>
                <li><strong>Certificate Monitoring:</strong> Track fraudulent certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-200">
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-700 mb-4">
          Elo Sec represents a comprehensive approach to home/small business security, demonstrating the ability to 
          design, implement, and maintain production-grade infrastructure. The platform combines multiple open-source 
          tools into a cohesive security ecosystem, providing real protection against genuine threats while showcasing 
          technical skills relevant to enterprise environments.
        </p>
        <p className="text-gray-700">
          The measurable results (<strong>1,500+ blocked intrusions weekly</strong>) prove this isn't just a learning 
          exercise—it's a functional security platform actively defending against real-world attacks.
        </p>
      </section>

      {/* Contact */}
      <div className="text-center">
        <p className="text-gray-600">
          Questions about this project? Contact me at{' '}
          <a href="mailto:lddorse@gmail.com" className="text-blue-600 hover:underline">
            lddorse@gmail.com
          </a>
        </p>
      </div>
    </FixedCardLayout>
  );
};

export default ElosecPlatform;
