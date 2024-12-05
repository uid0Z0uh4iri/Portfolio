import React, { useState } from 'react';
import { projects } from '../data/constants';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Web Applications');

  console.log("All projects:", projects);
  console.log("All categories:", [...new Set(projects.map(p => p.category))]);
  console.log("Active category:", activeCategory);
  
  const filteredProjects = projects.filter(project => {
    console.log("Checking project:", project.title, "Category:", project.category);
    return project.category === activeCategory;
  });
  console.log("Filtered projects:", filteredProjects);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="projects__filters">
        <button 
          className={`filter__button ${activeCategory === 'Web Applications' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Web Applications')}
        >
          Web Applications
        </button>
        <button 
          className={`filter__button ${activeCategory === 'Mailing' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Mailing')}
        >
          Mailing Projects
        </button>
        <button 
          className={`filter__button ${activeCategory === 'Web Scrapping' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Web Scrapping')}
        >
          Web Scraping
        </button>
      </div>

      <div className="projects__container container grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project__card">
              <img src={project.image} alt={project.title} className="project__img" />
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project__tag">{tag}</span>
                ))}
              </div>
              <div className="project__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project__link">
                    Github
                  </a>
                )}
                {project.webapp && (
                  <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="project__link">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No projects found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;