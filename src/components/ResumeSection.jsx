import React from "react";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  return (
    <section className="mt-8 print:mt-4">
      
      {/* Primary Technology Experience */}
      <h2 className="text-2xl font-bold mb-4 print:text-xl print:mb-2">Technology & Cybersecurity Experience</h2>
      <div className="space-y-4 print:space-y-2 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Application Support Specialist</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            Danville District 118 • Aug 2025 – Present
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Manage and support the Skyward student information platform</li>
            <li>Assist staff with account issues, workflows, and data troubleshooting</li>
            <li>Provide technical support and help improve district software processes</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Webmaster / Web Developer</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            Presbyterian Church (USA) • May 2021 – 2024
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Maintained and developed features for national organization websites</li>
            <li>Built tools, automated workflows, and supported editorial teams</li>
            <li>Transitioned websites into Drupal environment</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Congressional Intern</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            U.S. Representative Robin Kelly • Jan 2024 – May 2024
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Provided constituent services including Social Security and federal funding assistance</li>
            <li>Attended meetings with labor leaders, business owners, and community organizations</li>
            <li>Contributed to district-wide eNewsletter marketing and media content</li>
            <li>Coordinated outreach at career fairs and organized the Congressional Art Contest</li>
          </ul>
        </div>
      </div>

      {/* Featured Projects */}
      <h2 className="text-2xl font-bold mb-4 print:text-xl print:mb-2">Featured Projects</h2>
      <div className="space-y-4 print:space-y-2 mb-8">
        {/* Elosec - Expanded */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg border-2 border-blue-200 print:p-3 print:shadow-none print:border print:border-blue-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-blue-900 print:text-base">Elo Sec Platform</h3>
            <Link 
              to="/projects/elosec-platform"
              className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition print:hidden"
            >
              View Details
            </Link>
          </div>
          <p className="text-sm text-gray-600 mb-3 print:mb-1">
            <a href="https://elosec.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">elosec.tech</a>
            {' • '}
            <a href="https://status.leodorsey.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">status dashboard</a>
          </p>
          
          <p className="text-sm text-gray-700 mb-3 print:text-xs print:mb-2">
            Self-hosted network security and infrastructure monitoring platform running on Raspberry Pi 4. Demonstrates 
            enterprise-grade cybersecurity implementation on resource-constrained hardware with production-level protection.
          </p>

          <div className="bg-white p-3 rounded border border-blue-200 mb-3 print:p-2 print:mb-2">
            <p className="text-xs font-semibold text-blue-900 mb-1">Real-World Threat Protection:</p>
            <p className="text-xs text-gray-700">
              Actively blocks <strong>1,500+ intrusion attempts weekly</strong> from global botnets (Russia, UK, China). 
              Automated defense via fail2ban, Pi-hole DNS filtering, and UFW firewall rules.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3 print:gap-2 print:mb-2">
            <div className="text-xs">
              <p className="font-semibold text-gray-800 mb-1">Security Components:</p>
              <ul className="text-gray-700 space-y-0.5">
                <li>• Pi-hole (79,811 blocked domains)</li>
                <li>• WireGuard VPN (ChaCha20)</li>
                <li>• Fail2ban IPS (automated blocking)</li>
                <li>• UFW Firewall (stateful filtering)</li>
                <li>• Nginx reverse proxy + TLS 1.3</li>
              </ul>
            </div>
            <div className="text-xs">
              <p className="font-semibold text-gray-800 mb-1">Monitoring Stack:</p>
              <ul className="text-gray-700 space-y-0.5">
                <li>• Grafana + Prometheus metrics</li>
                <li>• Uptime Kuma (99%+ uptime)</li>
                <li>• Portainer (26 containers)</li>
                <li>• Let's Encrypt automation</li>
                <li>• Real-time alerting</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-2 mb-3 print:mb-2">
            <p className="text-xs text-gray-700">
              <strong>Key Metrics:</strong> 99.38% uptime • 21.2% memory usage • 8GB RAM • 3-5W power consumption
            </p>
          </div>

          <p className="text-xs text-gray-600 mb-2 print:text-xs">
            <strong>Skills Demonstrated:</strong> Linux system administration, Docker containerization, defense-in-depth 
            security architecture, network protocols (DNS, VPN, TLS/SSL), cryptography, intrusion detection, 
            infrastructure monitoring, incident response, firewall configuration
          </p>

          <p className="text-xs text-blue-700 font-semibold">
            → Full technical documentation, screenshots, and architecture details available on project page
          </p>
        </div>

        {/* Sacred Prints */}
        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Sacred Prints</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            <a href="https://sacred-prints.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sacred-prints.com</a>
          </p>
          <p className="text-sm text-gray-700 print:text-xs">
            Custom e-commerce platform built with HTML, Google Sheets integration, and Vercel deployment for small 
            business retail operations. Demonstrates full-stack web development and API integration.
          </p>
        </div>
      </div>

      {/* Creative & Technical Experience */}
      <h2 className="text-2xl font-bold mb-4 print:text-xl print:mb-2">Creative & Technical Experience</h2>
      <div className="space-y-4 print:space-y-2 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Live Audio Engineer</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            Chicago & Bloomington, IL • 2014 – 2020
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Provided live sound engineering for venues including Castle Theater, Logan Square Auditorium, and Thalia Hall</li>
            <li>Worked with production companies: Stitely Entertainment, Black Oak Technical (formerly Kehoe Design), Sound Investment, and Big Audio</li>
            <li>Managed audio for high-profile events featuring artists including Keith Urban, CeeLo Green, and Elizabeth Koch</li>
            <li>Recorded, mixed, and performed in live music environments</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Art Gallery Manager</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            David Leonardis Gallery, Wicker Park, Chicago • 2014 – 2020
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Managed daily gallery operations and curated exhibitions</li>
            <li>Coordinated events and directed art installations</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Stained Glass Artisan</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            Altamira Art Glass, Oak Park, IL • ~2013 – 2014
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Fabricated custom stained glass windows for residential homes and churches</li>
            <li>Completed restoration project on 100+ original windows from Frank Lloyd Wright-designed house</li>
          </ul>
        </div>
      </div>

      {/* Education & Certifications in 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 print:mt-3 print:gap-3">
        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-3 print:text-base print:mb-2">Education</h2>
          <div className="space-y-3 print:space-y-1">
            <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
              <p className="font-semibold print:text-sm">M.S. Cybersecurity</p>
              <p className="text-sm text-gray-600 print:text-xs">Eastern Illinois University</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
              <p className="font-semibold print:text-sm">B.S. Arts Technology</p>
              <p className="text-sm text-gray-600 print:text-xs">Illinois State University</p>
            </div>
          </div>
        </div>
        {/* Certifications */}
        <div>
          <h2 className="text-xl font-semibold mb-3 print:text-base print:mb-2">Certifications</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 print:text-xs print:space-y-0.5">
              <li>CompTIA Security+</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
