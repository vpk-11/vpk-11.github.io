import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ExternalLink, Github } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import projectsData from '../../data/projects.json';
import { formatText } from '../../utils/formatText';
import type { Project } from '../../types';
import './Projects.scss';

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const projects = projectsData as Project[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) dispatch(setAccent('green'));
        });
      },
      { threshold: 0.5 }
    );
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="projects" className="section projects-section" data-accent="green">
      <div className="container">
        <h2 className="pr-title section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              {/* Badges row */}
              <div className="project-badges">
                {project.demoLink && (
                  <span className="live-badge">
                    <span className="live-dot" aria-hidden="true" />
                    Live
                  </span>
                )}
                {project.featured && (
                  <span className="featured-badge">★ Featured</span>
                )}
              </div>

              <h3 className="pr-ct card-title">{project.title}</h3>

              {/* Project links — right under the title */}
              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--demo"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
                <a
                  href={project.githubLink ?? project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--github"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>

              <p className="card-description">{formatText(project.description)}</p>

              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;