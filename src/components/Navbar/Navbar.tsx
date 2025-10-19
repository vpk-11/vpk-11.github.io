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
    const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
    
    const observerOptions = {
      threshold: 0.3,  // Lowered threshold
      rootMargin: '-80px 0px -60% 0px'  // Adjusted margins
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">Portfolio</div>
        
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