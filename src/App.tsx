import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './store/store';
import type { RootState } from './store/store';
import { setTheme } from './store/themeSlice';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import BeyondTheCode from './pages/BeyondTheCode/BeyondTheCode';
import ClosingCTA from './pages/ClosingCTA/ClosingCTA';
import Footer from './components/layout/Footer/Footer';
import ParticleWave from './components/layout/Background/ParticleWave';
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
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ParticleWave />
      <main className="app" id="main-content">
      <Navbar />
      {/* Section order here must match SECTION_ORDER in data/sectionOrder.ts — reorder both together */}
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <BeyondTheCode />
      <ClosingCTA />
    </main>
      <Footer />
    </MotionConfig>
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