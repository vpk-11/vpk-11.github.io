import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, MoveRight } from 'lucide-react';
import projectsData from '../../data/projects.json';
import generalData from '../../data/general.json';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Tag from '../../components/ui/Tag/Tag';
import InlineAction from '../../components/ui/InlineAction/InlineAction';
import Modal from '../../components/ui/Modal/Modal';
import type { Project, GeneralData } from '../../types';
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
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="pr-card-footer">
        <div className="project-links">
          {project.githubLink && (
            <InlineAction
              href={toAbsolute(project.githubLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={e => e.stopPropagation()}
              icon={<Github size={13} />}
            >
              GitHub
            </InlineAction>
          )}
          {project.demoLink && (
            <InlineAction
              href={toAbsolute(project.demoLink)}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={e => e.stopPropagation()}
              icon={<ExternalLink size={13} />}
            >
              Live Demo
            </InlineAction>
          )}
        </div>
        <InlineAction as="button" className="pr-view-btn" onClick={() => onSelect(project)}>
          View <MoveRight size={14} />
        </InlineAction>
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
  <Modal
    isOpen
    onClose={onClose}
    labelledBy="modal-title"
    className="pr-modal"
    backdropClassName="pr-modal-backdrop"
  >
    <h2 id="modal-title" className="pr-modal-title">{project.title}</h2>

    <div className="pr-modal-links">
      {project.githubLink && (
        <InlineAction
          href={toAbsolute(project.githubLink)}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          icon={<Github size={14} />}
        >
          GitHub
        </InlineAction>
      )}
      {project.demoLink && (
        <InlineAction
          href={toAbsolute(project.demoLink)}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          icon={<ExternalLink size={14} />}
        >
          Live Demo
        </InlineAction>
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
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  </Modal>
);

// ─── Projects ─────────────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const projects = projectsData as Project[];
  const general = generalData as GeneralData;
  const headline = general.sectionHeadings.projects.headline;
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

  const colClass = filtered.length === 4
    ? 'pr-cols-4'
    : `pr-cols-${Math.min(filtered.length, 3)}`;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader
          sectionId="projects"
          label="PROJECTS"
          headline={headline ? formatText(headline) : 'Projects'}
        />

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
