import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/store';
import type { RootState } from './store/store';
import { setTheme } from './store/themeSlice';
import { setAccent } from './store/accentSlice';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.scss';

const AppContent: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const accent = useSelector((state: RootState) => state.accent.color);
  const dispatch = useDispatch();

  const sectionAccents: { [key: string]: string } = {
    hero: 'red',
    about: 'orange',
    education: 'purple',
    experience: 'blue',
    skills: 'yellow',
    projects: 'green',
    contact: 'red'
  };

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    dispatch(setTheme(darkModeQuery.matches ? 'dark' : 'light'));

    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? 'dark' : 'light'));
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];

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

      const newAccent = sectionAccents[currentSection];
      if (newAccent !== accent) {
        dispatch(setAccent(newAccent));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [dispatch, accent, sectionAccents]);

  useEffect(() => {
    document.body.className = `theme-${theme} accent-${accent}`;
  }, [theme, accent]);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;