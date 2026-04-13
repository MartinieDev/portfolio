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
        label: 'Capabilities',
        href: '#core-capabilities',
        id: 'core-capabilities',
      },
      { label: 'Projects', href: '#projects', id: 'projects' },
      { label: 'About', href: '#about', id: 'about' },
      { label: 'My Process', href: '#my-process', id: 'my-process' },
      { label: 'Git Activity', href: '#git-activity', id: 'git-activity' },
      { label: 'Collaborate', href: '#cta', id: 'cta' },
    ],
    [],
  );

  // Close menu when user interacts outside it
  useEffect(function () {
    function handleOutsideClick(e) {
      const clickedEl = e.target; // The element that was clicked
      const navEl = navRef.current;

      // if click is NOT in navEl
      if (navEl && !navEl.contains(clickedEl)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('pointerdown', handleOutsideClick);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
    };
  }, []);

  // Close menu when user scrolls
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleScroll() {
      setIsMenuOpen(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  function handleMenuToggle(e) {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  }

  function handleLinkSelect() {
    setIsMenuOpen(false);
  }

  return (
    <header className="nav-wrap">
      <div className="nav" ref={navRef}>
        {/* Brand */}
        <a href="#top" className="brand-container">
          <div className="git-icon">
            <GitIcon size={26} />
          </div>
          <span className="logo-name">Martins</span>
        </a>

        {/* Desktop inline nav links */}
        <ul className="desktop-links">
          {links.map((linkObj) => (
            <li key={linkObj.id}>
              <a href={linkObj.href} className="desktop-link">
                {linkObj.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right controls */}
        <div className="nav-right">
          {/* Desktop theme toggle */}
          <div className="hide-mobile">
            {theme === 'dark' ? (
              <button
                className="sun-toggle"
                onClick={() => setTheme('light')}
                aria-label="Switch to light mode"
              >
                <SunIcon size={22} />
              </button>
            ) : (
              <button
                className="moon-toggle"
                onClick={() => setTheme('dark')}
                aria-label="Switch to dark mode"
              >
                <MoonIcon size={22} />
              </button>
            )}
          </div>

          {/* Desktop resume button */}
          <a
            href="https://drive.google.com/file/d/1mDG3Eqml6B46pI2y28T2RR5Mr1bdBu4b/view?usp=drivesdk"
            className="cv-download-btn hide-mobile"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

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

        {/* Mobile dropdown menu */}
        <div
          className={`menu ${isMenuOpen ? 'show-menu' : ''} ${isMenuOpen ? 'nav-container-margin' : ''}`}
        >
          {/* Mobile theme toggle */}
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

          {/* Mobile menu links */}
          <ul className="menu-list">
            {links.map((linkObj) => (
              <li key={linkObj.id} className="nav-link-wrapper">
                <a
                  href={linkObj.href}
                  className={`nav-link`}
                  onClick={handleLinkSelect}
                >
                  {linkObj.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CV links */}
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
