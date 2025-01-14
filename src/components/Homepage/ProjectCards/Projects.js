// src/components/Projects.js
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "BetterBooks",
      status: "Current Project",
      description: "Review your Company's performance like a CPA would.",
      features: [
        "Integrated with QuickBooks",
        "Meaningful data visualizations",
        "Efficient transaction review",
      ],
      technologies: ["React", "Django", "PostgreSQL"],
      link: "/BetterBooks",
    },
    {
      title: "MTA Tracker",
      status: "Coming Soon",
      description: "Find out when your favorite bus and subway are coming next",
      features: [
        "Live NYC transit tracking",
        "Custom localized transit timings",
        "Export and display on your Arduino!",
      ],
      technologies: ["React", "Python", "Arduino"],
      link: "/TransitTracker",
    },];/*
    {
      title: "Book Clubber",
      status: "Coming Soon",
      description: "Create and manage your book club.",
      features: [
        "Track member's reading progress",
        "Manage Book Club membership",
        "Participate with paperback or Kindle",
      ],
      technologies: ["TBD"],
      link: "/BookClubber",
    },
  ];
  {
      title: "Resy List",
      status: "Coming Soon",
      description: "Easily make reservations for restaurants on your list",
      features: [
        "Maintain list of restaurants to try",
        "Automatically check for reservation availability",
      ],
      technologies: ["React"],
      link: "/ResyList"
    } */

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
