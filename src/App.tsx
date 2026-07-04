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
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import ParticleWave from './components/Background/ParticleWave';
import { useDynamicFavicon } from './hooks/useDynamicFavicon';
import './App.scss';

const AppContent: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  useDynamicFavicon();

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
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <>
      <ParticleWave />
      <div className="app">
      <Navbar />
      {/* Section order here must match SECTION_ORDER in data/sectionOrder.ts — reorder both together */}
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </div>
    </>
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