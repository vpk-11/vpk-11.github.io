import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../../store/themeSlice';
import type { RootState } from '../../store/store';
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
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : 'light'}`}>
          {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
        </div>
        <div className="toggle-icons">
          <Sun size={14} className="sun-icon" />
          <Moon size={14} className="moon-icon" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;