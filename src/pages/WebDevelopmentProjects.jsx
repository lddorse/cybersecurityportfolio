import React from "react";
import { Link } from "react-router-dom";
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const WebDevelopmentProjects = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Web Development Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Full-stack web applications, e-commerce platforms, and API integrations.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Sacred Prints Gallery
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Faith-based e-commerce platform with Google Sheets CMS, Stripe payments, and serverless architecture.
        </p>
        <div className="flex gap-2">
          <a 
            href="https://sacred-prints.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600 transition"
          >
            Live Site
          </a>
          <Link 
            to="/projects/sacred-prints" 
            className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </FixedCardLayout>
  );
};

export default WebDevelopmentProjects;
