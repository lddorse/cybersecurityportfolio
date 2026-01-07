import React from "react";
import { Link } from "react-router-dom";

const ResumeSection = () => {
  return (
    <section className="mt-8 print:mt-4">
      <h2 className="text-2xl font-bold mb-4">Technology Experience</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-1">Application Support Specialist</h3>
        <p className="text-sm text-gray-600 mb-2">Danville District 118 • Aug 2025 – Present</p>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 mt-8">Featured Projects</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <Link to="/projects/elosec-platform" className="text-blue-600">Elo Sec Platform</Link>
      </div>
    </section>
  );
};

export default ResumeSection;
