import React from "react";

const ResumeSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Professional Background</h2>
      
      {/* Experience */}
      <div className="space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-1">Application Support Specialist</h3>
          <p className="text-gray-600 mb-3">
            Danville District 118 • Aug 2025 – Present
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Manage and support the Skyward student information platform</li>
            <li>Assist staff with account issues, workflows, and data troubleshooting</li>
            <li>Provide technical support and help improve district software processes</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-1">Webmaster / Web Developer</h3>
          <p className="text-gray-600 mb-3">
            Presbyterian Church (USA) • May 2021 – 2024
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Maintained and developed features for national organization websites</li>
            <li>Built tools, automated workflows, and supported editorial teams</li>
            <li>Transitioned websites into Drupal environment</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-1">Art Gallery Manager / Audio Engineer / Various Roles</h3>
          <p className="text-gray-600 mb-3">
            Freelance • 2014 – 2020
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Managed gallery operations, curated events, and directed exhibitions</li>
            <li>Recorded and mixed audio projects; performed in live music environments</li>
            <li>Developed client relations and managed small creative teams</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <h2 className="text-xl font-semibold mt-12 mb-4">Education</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="font-semibold text-lg">M.S. Cybersecurity</p>
          <p className="text-gray-600">Eastern Illinois University</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="font-semibold text-lg">B.S. Arts Technology</p>
          <p className="text-gray-600">Illinois State University</p>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-xl font-semibold mt-12 mb-4">Certifications & Training</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Google Cybersecurity Certificate (In Progress)</li>
          <li>CompTIA Security+ (Planned 2025)</li>
        </ul>
      </div>
    </section>
  );
};

export default ResumeSection;