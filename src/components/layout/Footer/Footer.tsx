import React from 'react';
import profileData from '../../../data/profile.json';
import projectsData from '../../../data/projects.json';
import type { ProfileData, Project } from '../../../types';
import StatusDot from '../../ui/StatusDot/StatusDot';
import './Footer.scss';

const Footer: React.FC = () => {
  const profile = profileData as ProfileData;
  const projects = projectsData as Project[];
  const year = new Date().getFullYear();
  const liveProjects = projects.filter(p => !!p.demoLink);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div className="footer-col footer-signature-col">
          <p className="footer-copyright">&copy; {year} {profile.name}</p>
          <div className="footer-brandmark">
            <span>&mdash; A VPK Product</span>
          </div>
        </div>

        <div className="footer-col footer-spacer-col" aria-hidden="true" />

        <div className="footer-col">
          <div className="footer-col-title">Live Deployments</div>
          <nav className="footer-nav" aria-label="Live deployments">
            {liveProjects.map(project => (
              <a
                key={project.id}
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
              >
                {project.title.toUpperCase()}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Channels</div>
          <div className="footer-channels">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              GITHUB
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-nav-link">
              LINKEDIN
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            {profile.availability && (
              <span className="footer-status">
                <StatusDot />
                {profile.availability.toUpperCase()}
              </span>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
