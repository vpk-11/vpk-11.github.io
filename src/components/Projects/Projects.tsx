import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExternalLink, Github, X } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import projectsData from '../../data/projects.json';
import { formatText } from '../../utils/formatText';
import type { Project } from '../../types';
import './Projects.scss';

const SHORT_DESC_LIMIT = 150;

// Truncate raw string THEN format — so bold/italic still renders on card
function truncate(str: string, limit: number) {
  if (str.length <= limit) return str;
  return str.slice(0, str.lastIndexOf(' ', limit)) + '…';
}

function toAbsolute(url?: string) {
  if (!url) return undefined;
  return url.startsWith('http') ? url : `https://${url}`;
}

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const projects = projectsData as Project[];
  const [selected, setSelected] = useState<Project | null>(null);

  const tabs = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach(p => (p.categories ?? []).forEach((c: string) => seen.add(c)));
    return Array.from(seen);
  }, [projects]);

  const [activeTab, setActiveTab] = useState(tabs[0] ?? '');

  const filtered = useMemo(() =>
    projects.filter(p => (p.categories ?? []).includes(activeTab)),
    [projects, activeTab]
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelected(null);
  }, []);

  useEffect(() => {
    if (selected) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected, handleKeyDown]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) dispatch(setAccent('green')); }),
      { threshold: 0.3 }
    );
    const section = document.getElementById('projects');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [dispatch]);

  const colClass = `pr-cols-${Math.min(filtered.length, 3)}`;

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
                <span className="pr-tab-count">
                  {projects.filter(p => (p.categories ?? []).includes(tab)).length}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Cards */}
        <div className={`projects-grid ${colClass}`}>
          {filtered.map(project => {
            const rawShort = project.shortDescription
              ? truncate(project.shortDescription, SHORT_DESC_LIMIT)
              : truncate(project.description, SHORT_DESC_LIMIT);

            return (
              <div key={project.id} className="project-card">

                {/* Live badge — top right, only when demoLink exists */}
                {project.demoLink && (
                  <span className="live-badge">
                    <span className="live-dot" aria-hidden="true" />
                    Live
                  </span>
                )}

                <h3 className="pr-ct card-title">{project.title}</h3>

                <div className="project-links">
                  <a
                    href={toAbsolute(project.githubLink ?? project.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={toAbsolute(project.demoLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Fix 1: formatText applied to truncated string */}
                <p className="card-description">{formatText(rawShort)}</p>

                <div className="tech-stack">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <button className="pr-view-btn" onClick={() => setSelected(project)}>
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="pr-modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="pr-modal"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Fix 4: X button — top right of modal */}
            <button
              className="pr-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Fix 2: title row only — no live badge here */}
            <h2 className="pr-modal-title">{selected.title}</h2>

            {/* Links row — with live dot inline if live */}
            <div className="pr-modal-links">
              <a
                href={toAbsolute(selected.githubLink ?? selected.link)}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={14} />
                GitHub
              </a>
              {selected.demoLink && (
                <a
                  href={toAbsolute(selected.demoLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {/* Fix 2: live indicator inline with links, not floating */}
              {selected.demoLink && (
                <span className="pr-modal-live">
                  <span className="live-dot" aria-hidden="true" />
                  Live
                </span>
              )}
            </div>

            <div className="pr-modal-body">
              {formatText(selected.description)}
            </div>

            <div className="tech-stack">
              {selected.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;