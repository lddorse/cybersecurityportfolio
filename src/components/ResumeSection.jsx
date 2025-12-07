import React from "react";

const ResumeSection = () => {
  return (
    <section className="mt-8 print:mt-4">
      <h2 className="text-2xl font-bold mb-4 print:text-xl print:mb-2">Professional Experience</h2>
      
      {/* Experience */}
      <div className="space-y-4 print:space-y-2">
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
          <h3 className="text-lg font-semibold mb-1 print:text-base">Art Gallery Manager / Audio Engineer</h3>
          <p className="text-sm text-gray-600 mb-2 print:mb-1">
            Freelance • 2014 – 2020
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-sm text-gray-700 print:text-xs">
            <li>Managed gallery operations, curated events, and directed exhibitions</li>
            <li>Recorded and mixed audio projects; performed in live music environments</li>
          </ul>
        </div>
      </div>

      {/* Education & Certifications in 2 columns for print */}
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
              <li>Google Cybersecurity Certificate (In Progress)</li>
              <li>CompTIA Security+ (Planned 2025)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;