import React from "react";
import { Link } from "react-router-dom";
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const WebDevelopmentProjects = () => {
  return (
    <FixedCardLayout>
      <BackButton />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Web Development Projects</h1>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Sacred Prints Gallery</h2>
        <p className="text-gray-700 mb-4">
          Faith-based e-commerce platform with Google Sheets CMS, Stripe payments, and serverless architecture.
        </p>
        <div className="flex gap-2">
          <a
            href="https://sacred-prints.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          
            Live Site
          </a>
          <Link
            to="/projects/sacred-prints"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </FixedCardLayout>
  );
};

export default WebDevelopmentProjects;
