import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccent } from '../../store/accentSlice';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './About.scss';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const profile = profileData as ProfileData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) dispatch(setAccent('orange'));
        });
      },
      { threshold: 0.5 }
    );
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="about" className="section about-section" data-accent="orange">
      <div className="container">
        <h2 className="ab-t section-title">About</h2>
        <div className="about-grid">

          {/* Left — bio */}
          <div className="about-bio">
            <p>{profile.bio}</p>
          </div>

          {/* Right — engineering principles */}
          <div className="about-principles">
            <p className="principles-label">Engineering Principles</p>
            <ul className="principles-list">
              {profile.principles.map((p, i) => (
                <li key={i} className="principle-item">
                  <span className="principle-dot" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;