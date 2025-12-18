import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and TailwindCSS, featuring smooth animations and responsive design.",
      tags: ["React", "TailwindCSS", "Vite"],
      image: "/portfolio-preview.jpg",
      liveLink: "#",
      githubLink: "https://github.com/BhargavGuthula/Portfolio"
    },
    {
      title: "Lexis MUN",
      description: "A web application for an MUN (Model United Nations) event, built with React and Firebase.",
      tags: ["React.js", "Firebase hosting"],
      image: "/project2-preview.jpg",
      liveLink: "https://cmrtcmun.in/",
      githubLink: "https://github.com/BhargavGuthula/lexis-mun"
    },
    {
      title: "Lexis Club",
      description: "A web application for managing club activities and events, built with React and Firebase.",
      tags: ["React", "Firebase", ],
      image: "/project3-preview.jpg",
      liveLink: "#",
      githubLink: "https://github.com/BhargavGuthula/Lexis-club"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;