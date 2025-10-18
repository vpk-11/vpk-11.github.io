import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/store';
import type { RootState } from './store/store';
import { setTheme } from './store/themeSlice';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './App.scss';

const AppContent: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const accent = useSelector((state: RootState) => state.accent.color);
  const dispatch = useDispatch();

  useEffect(() => {
    // Detect system theme preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    dispatch(setTheme(darkModeQuery.matches ? 'dark' : 'light'));

    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? 'dark' : 'light'));
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  useEffect(() => {
    document.body.className = `theme-${theme} accent-${accent}`;
  }, [theme, accent]);

  return (
    <div className="app">
      <Navbar />
      <Hero />
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