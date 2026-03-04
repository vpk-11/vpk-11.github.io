import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Linkedin, Github, FileText } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './Contact.scss';

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const profile = profileData as ProfileData;
  const year = new Date().getFullYear();

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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="contact" className="section contact-section" data-accent="red">
      <div className="container">

        {/* Main contact content */}
        <div className="contact-main">
          <h2 className="co-t section-title">Get In Touch</h2>
          <p className="contact-text">
            I'm currently looking for new opportunities. Whether you have a question or just want to connect, feel free to reach out on LinkedIn!
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <Linkedin size={24} />
            <span>Message on LinkedIn</span>
          </a>
        </div>

        {/* Footer pinned to bottom */}
        <div className="contact-footer">
          <p className="footer-copyright">
            © {year} Kaushik Parthasarathy. All rights reserved.
          </p>
          <div className="footer-links">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Resume"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;