import GitIcon from '../../assets/icons/GitIcon';
import MoonIcon from '../../assets/icons/MoonIcon';
import SunIcon from '../../assets/icons/SunIcon';

import './nav.css';

function Nav({ theme = 'dark' }) {
  return (
    <header className="nav-wrap">
      <div className="nav container">
        <a href="#top" className="brand-container">
          <div className="git-icon">
            <GitIcon />
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
          <button className="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
