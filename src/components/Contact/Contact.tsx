import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Linkedin } from 'lucide-react';
import { setAccent } from '../../store/accentSlice';
import profileData from '../../data/profile.json';
import type { ProfileData } from '../../types';
import './Contact.scss';

const Contact: React.FC = () => {
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

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [dispatch]);

  return (
    <section id="contact" className="section contact-section" data-accent="red">
      <div className="container">
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
    </section>
  );
};

export default Contact;