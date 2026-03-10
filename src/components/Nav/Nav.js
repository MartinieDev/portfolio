import GitIcon from '../../assets/icons/GitIcon';
import MoonIcon from '../../assets/icons/MoonIcon';
import SunIcon from '../../assets/icons/SunIcon';

function Nav({theme = 'dark'}) {
  return (
    <header className="nav-wrapper">
      <div className="nav container">
        <a href="#top" className="brand-container">
          <div className="git-icon">
            <GitIcon />
          </div>
          <span className="brandText">Martins</span>
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



          {/* Hamburger btn */}
        </div>
      </div>
    </header>
  );
}

export default Nav;
