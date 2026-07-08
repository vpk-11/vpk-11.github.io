import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../../../store/themeSlice';
import type { RootState } from '../../../store/store';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
    >
      <span className={`toggle-slot ${theme === 'dark' ? 'active' : ''}`}>
        <Moon size={13} />
      </span>
      <span className={`toggle-slot ${theme === 'light' ? 'active' : ''}`}>
        <Sun size={13} />
      </span>
    </button>
  );
};

export default ThemeToggle;