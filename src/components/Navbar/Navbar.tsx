import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import type { RootState } from '../../store/store';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const accent = useSelector((state: RootState) => state.accent.color);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for navbar highlighting
  useEffect(() => {
    const sections = ['hero', 'education', 'experience', 'skills', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = 'hero';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
      const navbarHeight = 80;
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${activeSection === 'hero' ? 'hide-brand' : ''}`} 
      data-section={activeSection}
      data-accent={accent}
    >
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