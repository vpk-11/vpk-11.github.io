import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
// import type { RootState } from '../../store/store';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  // const theme = useSelector((state: RootState) => state.theme.mode); 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section - FIXED
  useEffect(() => {
    const sections = ['hero', 'education', 'experience', 'skills', 'projects', 'contact'];
    
    const observerOptions = {
      threshold: 0.1,  // Section needs to be 20% visible
      rootMargin: '-100px 0px -50% 0px'  // Account for navbar height and center focus
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the section that's most visible
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      
      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${activeSection === 'hero' ? 'hide-brand' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-full">Kaushik Parthasarathy</span>
          <span className="brand-short">KP</span>
        </div>
        
        <div className="nav-desktop">
          {navItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
        </div>

        <div className="nav-mobile">
          <ThemeToggle />
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;