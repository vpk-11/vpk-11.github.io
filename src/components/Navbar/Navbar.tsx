import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown,
  GraduationCap, Briefcase, FolderGit2, Wrench, FileText, Users,
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.scss';

interface SubMenuItem {
  label: string;
  description: string;
  icon: React.ElementType;
  id: string;
}

interface SubMenuGroup {
  title: string;
  items: SubMenuItem[];
}

interface NavItem {
  label: string;
  id?: string;          // plain link target
  subMenus?: SubMenuGroup[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  {
    label: 'Work',
    subMenus: [
      {
        title: 'Background',
        items: [
          { label: 'Education', description: 'Where the fundamentals got built', icon: GraduationCap, id: 'education' },
          { label: 'Experience', description: 'Where the work got done', icon: Briefcase, id: 'experience' },
        ],
      },
      {
        title: 'Showcase',
        items: [
          { label: 'Projects', description: 'Everything I’ve shipped', icon: FolderGit2, id: 'projects' },
          { label: 'Skills', description: 'The tools I reach for', icon: Wrench, id: 'skills' },
        ],
      },
    ],
  },
  {
    label: 'More',
    subMenus: [
      {
        title: 'Extras',
        items: [
          { label: 'Resume', description: 'One-page PDF, plus a live preview', icon: FileText, id: 'resume' },
          { label: 'Beyond the Code', description: 'Leadership and mentorship', icon: Users, id: 'beyond-the-code' },
        ],
      },
    ],
  },
];

const MOBILE_NAV_ITEMS = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Resume', id: 'resume' },
  { name: 'Beyond the Code', id: 'beyond-the-code' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for navbar highlighting
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'resume', 'beyond-the-code'];

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
      setOpenMenu(null);
    }
  };

  const isGroupActive = (item: NavItem) =>
    item.subMenus?.some(group => group.items.some(i => i.id === activeSection)) ?? false;

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${activeSection === 'hero' ? 'hide-brand' : ''}`}
      data-section={activeSection}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-full">Kaushik Parthasarathy</span>
          <span className="brand-short">KP</span>
        </div>

        <ul className="nav-desktop">
          {NAV_ITEMS.map(item => (
            <li
              key={item.label}
              className="nav-item"
              onMouseEnter={() => item.subMenus && setOpenMenu(item.label)}
              onMouseLeave={() => item.subMenus && setOpenMenu(null)}
            >
              <button
                className={`nav-link ${item.id === activeSection || isGroupActive(item) ? 'active' : ''}`}
                onMouseEnter={() => setHoveredLabel(item.label)}
                onMouseLeave={() => setHoveredLabel(null)}
                onClick={() => item.id && scrollToSection(item.id)}
                aria-expanded={item.subMenus ? openMenu === item.label : undefined}
              >
                <span>{item.label}</span>
                {item.subMenus && (
                  <ChevronDown
                    size={14}
                    className={`nav-chevron ${openMenu === item.label ? 'flipped' : ''}`}
                  />
                )}
                {(hoveredLabel === item.label || openMenu === item.label) && (
                  <motion.div layoutId="nav-hover-bg" className="nav-hover-bg" />
                )}
              </button>

              <AnimatePresence>
                {openMenu === item.label && item.subMenus && (
                  <motion.div
                    className="nav-submenu"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.16 }}
                  >
                    {item.subMenus.map(group => (
                      <div className="nav-submenu-group" key={group.title}>
                        <h3 className="nav-submenu-title">{group.title}</h3>
                        <ul className="nav-submenu-list">
                          {group.items.map(sub => {
                            const Icon = sub.icon;
                            return (
                              <li key={sub.label}>
                                <button
                                  className="nav-submenu-link"
                                  onClick={() => scrollToSection(sub.id)}
                                >
                                  <span className="nav-submenu-icon"><Icon size={17} /></span>
                                  <span className="nav-submenu-text">
                                    <span className="nav-submenu-label">{sub.label}</span>
                                    <span className="nav-submenu-desc">{sub.description}</span>
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>

        <div className="nav-mobile">
          <ThemeToggle />
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {MOBILE_NAV_ITEMS.map(item => (
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
