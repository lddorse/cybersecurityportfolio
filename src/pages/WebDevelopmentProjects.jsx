import React from "react";
import { Link } from "react-router-dom";
import FixedCardLayout from "../components/FixedCardLayout";
import BackButton from "../components/BackButton";

const WebDevelopmentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Sacred Prints Gallery",
      description: "Faith-based e-commerce platform with Google Sheets CMS, Stripe payments, and serverless architecture. Features charitable giving model with 50% of profits donated to churches and food banks.",
      tags: ["E-Commerce", "Serverless", "API Integration"],
      link: "/projects/sacred-prints",
      externalLink: "https://sacred-prints.com",
      highlights: [
        "Google Sheets as headless CMS",
        "Stripe Checkout integration",
        "Zero monthly hosting costs",
        "Vanilla JS (no framework)"
      ]
    }
  ];

  return (
    <FixedCardLayout>
      <BackButton />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Web Development Projects</h1>
        <p className="text-gray-600 text-lg">
          Full-stack web applications, e-commerce platforms, and API integrations
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h2>
                <div className="flex gap-2">
                  {project.externalLink && (
                    
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                      Live Site
                    </a>
                  )}
                  <Link
                    to={project.link}
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FixedCardLayout>
  );
};

export default WebDevelopmentProjects;
