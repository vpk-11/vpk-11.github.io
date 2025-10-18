import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Github, Linkedin, FileText } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './Hero.scss';

const Hero: React.FC = () => {
  const dispatch = useDispatch();
  const profile = profileData as ProfileData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            dispatch(setAccent('red'));
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="hero" className="section hero-section" data-accent="red">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{profile.name}</h1>
          <h2 className="hero-subtitle">{profile.title}</h2>
          <p className="hero-bio">{profile.bio}</p>
          
          <div className="hero-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-link">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hero-link">
              <FileText size={24} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;