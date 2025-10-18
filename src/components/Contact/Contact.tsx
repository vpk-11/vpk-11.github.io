import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <a href={`mailto:${profile.email}`} className="contact-button">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;