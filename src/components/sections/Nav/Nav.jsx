import { useEffect, useMemo, useRef, useState } from 'react';

import GitIcon from '../../../assets/icons/GitIcon';
import MoonIcon from '../../../assets/icons/MoonIcon';
import SunIcon from '../../../assets/icons/SunIcon';
import DownloadIcon from '../../../assets/icons/DownloadIcon';
import ReadCvIcon from '../../../assets/icons/ReadCvIcon';

import './nav.css';

function Nav({ theme = 'dark' }) {
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
      { label: 'Activity', href: '#git-activity', id: 'git-activity' },
      { label: 'Collaborate', href: '#cta', id: 'cta' },
    ],
    [],
  );

  useEffect(function () {
    function handleOutsideClick(e) {
      const clickedEl = e.target; // The element that was clicked
      const navEl = navRef.current;

      // navEl does not contain clickedEl ? close
      if (!navEl.contains(clickedEl)) {
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

          <a
            href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link"
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

        {/* Mobile menu bar */}
        <div className={`menu ${isMenuOpen ? 'show-menu' : ''}`}>
          {/* Mode toggle (mobile) */}
          <div className="mode-wrap">
            <div className="mode-icon-wrap">
              <MoonIcon size={21} />
              <SunIcon size={21} />
            </div>
          </div>

          {/* Menu links */}
          <ul className="menu-list">
            {links.map((linkObj) => (
              <li>
                <a href={linkObj.href} key={linkObj.id} className={`nav-link `}>
                  {linkObj.label}
                </a>
              </li>
            ))}
          </ul>

          {/* View or download CV */}
          <div className="cv-wrap">
            <div className="view-cv-icon">
              <ReadCvIcon size={21} />

              <a href="/cv/Nnaukwu_Martins_Frontend_Developer.pdf">
                View my CV
              </a>
            </div>

            <div className="demacator-line"></div>

            <div className="download-cv-icon">
              <DownloadIcon size={21} />

              <a href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link">
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
