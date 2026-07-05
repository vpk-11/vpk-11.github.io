import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ExternalLink, Github, X, MoveRight } from 'lucide-react';
import projectsData from '../../data/projects.json';
import profileData from '../../data/profile.json';
import { formatText } from '../../utils/formatText';
import { sectionNumber } from '../../data/sectionOrder';
import type { Project, ProfileData } from '../../types';
import './Projects.scss';

const SHORT_DESC_LIMIT = 150;

function stripMarkdown(str: string): string {
  return str
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\{accent\}(.*?)\{\/accent\}/g, '$1')
    .replace(/\{outline\}(.*?)\{\/outline\}/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1');
}

function truncate(str: string, limit: number) {
  const plain = stripMarkdown(str);
  if (plain.length <= limit) return str;
  return plain.slice(0, plain.lastIndexOf(' ', limit)) + '…';
}

function toAbsolute(url?: string) {
  if (!url) return undefined;
  return url.startsWith('http') ? url : `https://${url}`;
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const shortLines = project.shortDescription
    ? project.shortDescription.map(line => truncate(line, SHORT_DESC_LIMIT))
    : [truncate(project.description, SHORT_DESC_LIMIT)];

  return (
    <div
      className="project-card"
      onClick={() => { if (window.innerWidth > 1024) onSelect(project); }}
    >
      {project.demoLink && (
        <span className="live-badge">
          <span className="live-dot" aria-hidden="true" />
          Live
        </span>
      )}

      <h3 className="pr-ct card-title">{project.title}</h3>
      <div className="card-description">
        {shortLines.map((line, i) => (
          <p key={i} className="card-description-line">{formatText(line)}</p>
        ))}
      </div>

      <div className="tech-stack">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      <div className="pr-card-footer">
        <div className="project-links">
          {project.githubLink && (
            <a
              href={toAbsolute(project.githubLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={e => e.stopPropagation()}
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.demoLink && (
            <a
              href={toAbsolute(project.demoLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
        <button className="pr-view-btn" onClick={() => onSelect(project)}>
          View <MoveRight size={14} />
        </button>
      </div>
    </div>
  );
};

// ─── ProjectModal ─────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <div className="pr-modal-backdrop" onClick={onClose}>
    <div
      className="pr-modal"
      onClick={e => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        className="pr-modal-close"
        onClick={onClose}
        aria-label="Close"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      >
        <X size={16} />
      </button>

      <h2 id="modal-title" className="pr-modal-title">{project.title}</h2>

      <div className="pr-modal-links">
        {project.githubLink && (
          <a
            href={toAbsolute(project.githubLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {project.demoLink && (
          <a
            href={toAbsolute(project.demoLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        {project.demoLink && (
          <span className="pr-modal-live">
            <span className="live-dot" aria-hidden="true" />
            Live
          </span>
        )}
      </div>

      <div className="pr-modal-body">
        {project.description.split('\n\n').map((para, i) => (
          <p key={i}>{formatText(para)}</p>
        ))}
      </div>

      <div className="tech-stack">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

// ─── Projects ─────────────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const projects = projectsData as Project[];
  const profile = profileData as ProfileData;
  const headline = profile.sectionHeadings?.projects.headline;
  const [selected, setSelected] = useState<Project | null>(null);

  const categoryTabs = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach(p => (p.categories ?? []).forEach((c: string) => seen.add(c)));
    return Array.from(seen);
  }, [projects]);

  const tabs = useMemo(() => ['Featured', 'All', ...categoryTabs], [categoryTabs]);

  const [activeTab, setActiveTab] = useState('Featured');

  const filtered = useMemo(() => {
    if (activeTab === 'Featured') return projects.filter(p => p.featured === true);
    if (activeTab === 'All') return projects;
    return projects.filter(p => (p.categories ?? []).includes(activeTab));
  }, [projects, activeTab]);

  function tabCount(tab: string): number {
    if (tab === 'Featured') return projects.filter(p => p.featured === true).length;
    if (tab === 'All') return projects.length;
    return projects.filter(p => (p.categories ?? []).includes(tab)).length;
  }

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

  const colClass = filtered.length === 4
    ? 'pr-cols-4'
    : `pr-cols-${Math.min(filtered.length, 3)}`;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-eyebrow">
          <span>{sectionNumber('projects')} / PROJECTS</span>
        </div>
        <h2 className="section-headline">{headline ? formatText(headline) : 'Projects'}</h2>

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
                <span className="pr-tab-count">{tabCount(tab)}</span>
              </button>
            ))}
          </div>
        )}

        <div className={`projects-grid ${colClass}`} role="tabpanel" aria-label={activeTab}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
