import React from "react";

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
            Presbyterian Church (USA) • May 2021 – Aug 2025
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
        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Sacred Prints</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            <a href="https://sacred-prints.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sacred-prints.com</a>
          </p>
          <p className="text-sm text-gray-700 print:text-xs">
            Custom e-commerce platform built with HTML, Google Sheets integration, and Vercel deployment for small business retail operations
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Elosec Tech</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            <a href="https://elosec.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">elosec.tech</a>
          </p>
          <p className="text-sm text-gray-700 print:text-xs">
            Network security suite designed for small businesses and home networks
          </p>
        </div>
      </div>

      {/* Creative & Technical Experience */}
      <h2 className="text-2xl font-bold mb-4 print:text-xl print:mb-2">Creative & Technical Experience</h2>
      <div className="space-y-4 print:space-y-2 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Live Audio Engineer</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            Chicago & Bloomington, IL • 2010 – 2020
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Provided live sound engineering for venues including Castle Theater, Logan Square Auditorium, and Thalia Hall</li>
            <li>Worked with production companies: Stitely Entertainment, Black Oak Technical (formerly Kehoe Design), Sound Investment, and Big Audio</li>
            <li>Managed audio for high-profile events featuring artists including Keith Urban, CeeLo Green, and Elizabeth Koch</li>
            <li>Recorded, mixed, and performed in live music environments</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow print:p-2 print:shadow-none print:border print:border-gray-300">
          <h3 className="text-lg font-semibold mb-1 print:text-base">Art Gallery Associate</h3>
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
            <li>Completed restoration project on original windows from Frank Lloyd Wright-designed house</li>
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
