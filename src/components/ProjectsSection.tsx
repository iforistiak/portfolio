import React, { useState, useEffect } from 'react';
import { featuredProjects, technicalSkills } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="my-project" className="page-section active" role="tabpanel">
      <div className="section-block">
        <div className="section-header">
          <h2 className="section-title red">Featured Work &amp; Projects</h2>
          <p className="section-subtitle">Real-world systems, client solutions, and web portals</p>
        </div>

        <div className="project-grid" id="featured-work-grid">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card is-visible"
              style={{ transitionDelay: `${project.fadeDelay}ms` }}
            >
              <div
                className="project-img"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <span className="project-category-tag">{project.category}</span>
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-link-btn visit-btn"
                  >
                    <i className="fas fa-external-link-alt"></i> Visit Site
                  </a>
                  <a
                    href={project.inquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-link-btn inquiry-btn"
                  >
                    <i className="fab fa-whatsapp"></i> Inquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="section-block">
        <div className="section-header">
          <h2 className="section-title">Technical Skills &amp; Proficiency</h2>
          <p className="section-subtitle">Verified domain competencies and hands-on toolkits</p>
        </div>

        <div className="skills-container-card">
          {technicalSkills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-label-row">
                <span>
                  <i
                    className={skill.icon}
                    style={{ color: skill.iconColor, marginRight: '8px' }}
                  ></i>{' '}
                  {skill.name}
                </span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${skill.colorClass}`}
                  style={{
                    width: animated ? `${skill.percentage}%` : '0%',
                    transition: 'width 1s cubic-bezier(0.2, 0.8, 0.2, 1)'
                  }}
                  data-percent={`${skill.percentage}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
