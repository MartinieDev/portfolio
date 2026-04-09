import { useEffect, useMemo, useRef, useState } from 'react';

import GitIcon from '../../../assets/icons/GitIcon';
import MoonIcon from '../../../assets/icons/MoonIcon';
import SunIcon from '../../../assets/icons/SunIcon';
import DownloadIcon from '../../../assets/icons/DownloadIcon';
import ReadCvIcon from '../../../assets/icons/ReadCvIcon';

import './nav.css';

function Nav({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const links = useMemo(
    () => [
      { label: 'Home', href: '#top', id: 'top' },
      {
        label: 'Core Capabilities',
        href: '#core-capabilities',
        id: 'core-capabilities',
      },
      { label: 'Projects', href: '#projects', id: 'projects' },
      { label: 'About me', href: '#about', id: 'about' },
      { label: 'My Process', href: '#my-process', id: 'my-process' },
      { label: 'Git Activity', href: '#git-activity', id: 'git-activity' },
      { label: 'CTA', href: '#cta', id: 'cta' },

    ],
    [],
  );

  useEffect(function () {
    function handleOutsideClick(e) {
      const clickedEl = e.target; // The element that was clicked
      const navEl = navRef.current;

      // navEl does not contain clickedEl ? close
      if (navEl && !navEl.contains(clickedEl)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, []);

  function handleMenuToggle(e) {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  }

  function handleLinkSelect() {
    setIsMenuOpen(false)
  }

  return (
    <header className="nav-wrap">
      <div className="nav" ref={navRef}>
        {/* Git + Logo */}
        <a href="#top" className="brand-container">
          <div className="git-icon">
            <GitIcon size={26} />
          </div>
          <span className="logo-name">Martins</span>
        </a>

        <div className="nav-right">
          {/* Theme toggle (only desktop) */}
          <div className="hide-mobile">
            {theme === 'dark' ? (
              <button className="sun-toggle">
                <SunIcon size={30} />
              </button>
            ) : (
              <button className="moon-toggle">
                <MoonIcon size={30} />
              </button>
            )}
          </div>

          <button
            href="https://drive.google.com/file/d/1mDG3Eqml6B46pI2y28T2RR5Mr1bdBu4b/view?usp=drivesdk"
            className="cv-download-btn hide-mobile"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </button>

          {/* Mobile hamburger btn */}
          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={handleMenuToggle}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile menu bar */}
        <div className={`menu ${isMenuOpen ? 'show-menu' : ''}`}>
          {/* Mode toggle (mobile) */}
          <div className="mode-wrap">
            <div className="mode-icon-wrap">
              <div
                className={`mode-indicator ${theme === 'light' ? 'indicator-light' : 'indicator-dark'}`}
              />

              <div className="moon-icon" onClick={() => setTheme('dark')}>
                <MoonIcon size={21} />
              </div>

              <div className="sun-icon" onClick={() => setTheme('light')}>
                <SunIcon size={21} />
              </div>
            </div>
          </div>

          {/* Menu links */}
          <ul className="menu-list">
            {links.map((linkObj) => (
              <li key={linkObj.id}>
                <a href={linkObj.href} className={`nav-link `} onClick={handleLinkSelect}>
                  {linkObj.label}
                </a>
              </li>
            ))}
          </ul>

          {/* View or download CV */}
          <div className="cv-wrap">
            <div className="view-cv-icon">
              <ReadCvIcon size={21} />

              <a href="/cv/Nnaukwu_Martins_Resume.pdf">View my CV</a>
            </div>

            <div className="demacator-line"></div>

            <div className="download-cv-icon">
              <DownloadIcon size={21} />

              <a href="https://drive.google.com/file/d/1vAHn8bCuyYqAQX-kxI6qSyzTLBY_jipr/view?usp=drivesdk">
                Downlaod CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
