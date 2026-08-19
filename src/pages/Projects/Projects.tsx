import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import projectsData from '../../data/projects.json';
import generalData from '../../data/general.json';
import { formatText } from '../../utils/formatText';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import InlineAction from '../../components/ui/InlineAction/InlineAction';
import Modal from '../../components/ui/Modal/Modal';
import Card from '../../components/ui/Card/Card';
import type { Project, GeneralData } from '../../types';
import './Projects.scss';

const CARD_DESC_LIMIT = 200;
const CARD_TECH_LIMIT = 5;

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

// Plain `·`-joined text, not tags/pills. Card truncates to the first
// CARD_TECH_LIMIT with a trailing ellipsis; modal always shows the full list.
const TechList: React.FC<{ tech: string[]; limit?: number }> = ({ tech, limit }) => {
  const shown = limit ? tech.slice(0, limit) : tech;
  const truncated = limit != null && tech.length > limit;
  return (
    <p className="tech-list">
      {shown.join(' · ')}{truncated && ' …'}
    </p>
  );
};

// ─── ProjectCard ──────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const shortDesc = truncate(project.shortDescription ?? project.description, CARD_DESC_LIMIT);

  return (
    <Card className="project-card">
      {project.liveDeploymentUrl && (
        <span className="live-badge">
          <span className="live-dot" aria-hidden="true" />
          Live
        </span>
      )}

      <h3 className="pr-ct card-title">{project.title}</h3>
      <div className="card-description">
        <p className="card-description-line">{formatText(shortDesc)}</p>
      </div>

      <TechList tech={project.tech} limit={CARD_TECH_LIMIT} />

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
              ariaLabel={`${project.title} on GitHub (opens in new tab)`}
            >
              GitHub
            </InlineAction>
          )}
          {project.liveDeploymentUrl && (
            <InlineAction
              href={toAbsolute(project.liveDeploymentUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={e => e.stopPropagation()}
              icon={<ExternalLink size={13} />}
              ariaLabel={`${project.title} live demo (opens in new tab)`}
            >
              Live Demo
            </InlineAction>
          )}
        </div>
        <InlineAction
          as="button"
          className="pr-view-btn"
          onClick={() => onSelect(project)}
          ariaLabel={`Open details for ${project.title}`}
        >
          Open <Maximize2 size={14} />
        </InlineAction>
      </div>
    </Card>
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
      {project.liveDeploymentUrl && (
        <InlineAction
          href={toAbsolute(project.liveDeploymentUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          icon={<ExternalLink size={14} />}
        >
          Live Demo
        </InlineAction>
      )}
      {project.liveDeploymentUrl && (
        <span className="live-badge pr-modal-live">
          <span className="live-dot" aria-hidden="true" />
          Live
        </span>
      )}
    </div>

    <TechList tech={project.tech} />

    <div className="pr-modal-body">
      {project.description.split('\n\n').map((para, i) => (
        <p key={i}>{formatText(para)}</p>
      ))}
    </div>
  </Modal>
);

// ─── Projects ─────────────────────────────────────────────────────────────────

function byLiveThenId(a: Project, b: Project): number {
  const liveDiff = Number(!!b.liveDeploymentUrl) - Number(!!a.liveDeploymentUrl);
  return liveDiff !== 0 ? liveDiff : a.id - b.id;
}

const Projects: React.FC = () => {
  const projects = useMemo(() => [...(projectsData as Project[])].sort(byLiveThenId), []);
  const general = generalData as GeneralData;
  const headline = general.sectionHeadings.projects.headline;
  const [selected, setSelected] = useState<Project | null>(null);

  const colClass = projects.length === 4
    ? 'pr-cols-4'
    : `pr-cols-${Math.min(projects.length, 3)}`;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader
          sectionId="projects"
          label="PROJECTS"
          headline={headline ? formatText(headline) : 'Projects'}
        />

        <div className={`projects-grid ${colClass}`}>
          {projects.map(project => (
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
