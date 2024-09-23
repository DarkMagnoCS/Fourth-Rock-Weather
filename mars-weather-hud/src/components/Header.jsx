import React, { useState, useEffect } from 'react';
import './Header.css'; // CSS file for styling
import { FaRocket, FaGithub, FaSun, FaMoon } from 'react-icons/fa'; // Icons for logos

const Header = () => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <div className="logo-container">
        <FaRocket className="icon" />
        <span className="app-name">Mars Weather App</span>
      </div>
      <div className="link-container">
        <a href="https://github.com/DarkMagnoCS/Fourth-Rock-Weather" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
