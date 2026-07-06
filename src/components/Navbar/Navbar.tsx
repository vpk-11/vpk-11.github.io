import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown,
  GraduationCap, Briefcase, FolderGit2, Wrench, FileText, Users,
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import generalData from '../../data/general.json';
import type { GeneralData, NavItem } from '../../types';
import { SECTION_ORDER } from '../../data/sectionOrder';
import './Navbar.scss';

// String -> component lookup for icon names stored in general.json's nav data.
const ICONS: Record<string, React.ElementType> = {
  GraduationCap, Briefcase, FolderGit2, Wrench, FileText, Users,
};

const { nav: NAV_ITEMS } = generalData as GeneralData;

// Mobile menu is a flat list — derive it from the same nav tree so
// there's one source of truth for labels/ids instead of a second array.
const MOBILE_NAV_ITEMS: { name: string; id: string }[] = NAV_ITEMS.flatMap(item => {
  if (item.id) return [{ name: item.label, id: item.id }];
  return item.subMenus?.flatMap(group =>
    group.items.map(sub => ({ name: sub.label, id: sub.id }))
  ) ?? [];
});

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
    const sections = SECTION_ORDER.filter(id => id !== 'closing-cta');

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

  const toggleMenu = (label: string) => {
    setOpenMenu(prev => (prev === label ? null : label));
  };

  // Only devices with real hover (mouse/trackpad) get hover-to-open.
  // Touch devices (iPad included) fire a synthetic mouseenter on tap, which
  // was racing with the click handler and closing the menu it just opened.
  const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  // Click outside closes an open dropdown — makes the menu touch-friendly
  // (hover alone doesn't persist on tap for touch devices).
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-item')) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
              onMouseEnter={() => item.subMenus && canHover && setOpenMenu(item.label)}
              onMouseLeave={() => item.subMenus && canHover && setOpenMenu(null)}
            >
              <button
                className={`nav-link ${item.id === activeSection || isGroupActive(item) ? 'active' : ''}`}
                onMouseEnter={() => setHoveredLabel(item.label)}
                onMouseLeave={() => setHoveredLabel(null)}
                onClick={() => {
                  if (item.subMenus) toggleMenu(item.label);
                  else if (item.id) scrollToSection(item.id);
                }}
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
                            const Icon = ICONS[sub.icon];
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
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          {/* Book a Call — commented out, Cal.com integration deferred (see .claude/v5-todo.md) */}
          {/* <a href="#closing-cta" className="nav-book-call">Book a Call</a> */}
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
