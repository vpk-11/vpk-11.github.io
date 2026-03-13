import React, { useEffect, useState, useMemo } from 'react';
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

  // Ensures links always have a protocol so they don't resolve as relative paths
  const toAbsolute = (url: string) =>
    url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;

  // Auto-generate tabs from unique categories in JSON order of first appearance
  const tabs = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach(p => {
      (p.categories ?? []).forEach((c: string) => {
        if (!seen.has(c)) seen.add(c);
      });
    });
    return Array.from(seen);
  }, [projects]);

  const [activeTab, setActiveTab] = useState(tabs[0] ?? '');

  const filtered = useMemo(() =>
    projects.filter(p => (p.categories ?? []).includes(activeTab)),
    [projects, activeTab]
  );

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

        {/* Tabs */}
        {tabs.length > 0 && (
          <div className="pr-tabs" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`pr-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                <span className="pr-tab-count">{projects.filter(p => (p.categories ?? []).includes(tab)).length}</span>
              </button>
            ))}
          </div>
        )}

        {/* Cards — identical to original */}
        <div className="projects-grid">
          {filtered.map(project => (
            <div
              key={project.id}
              className={`project-card`}
            >
              {/* Live badge — top right indicator */}
              {project.demoLink && (
                <span className="live-badge">
                  <span className="live-dot" aria-hidden="true" />
                  Live
                </span>
              )}
              <h3 className="pr-ct card-title">{project.title}</h3>

              {/* Project links — GitHub first, Live Demo second */}
              <div className="project-links">
                <a
                  href={toAbsolute(project.githubLink ?? project.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--github"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
                {project.demoLink && (
                  <a
                    href={toAbsolute(project.demoLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--demo"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
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