import SectionHead from '../../reusables/SectionHead';
import { contactLinks } from '../../../data/contactLinks';

import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <div className="footer-header">
        <h2>
          Let's build something
          <br /> <span className="color-text">worth using.</span>
        </h2>
      </div>

      <p className="footer-body-text">
        Open to freelance, full-time roles, and the right collaborations. Reach
        out through any of the channel below.
      </p>

      <div className="contact-links">
        {contactLinks.map((contactObj) => (
          <ContactItem key={contactObj.phone} contactObj={contactObj} />
        ))}
      </div>

      <div className="line-demacator"></div>

      <div className="footer-closure-content">
        <div className="top-closure-wrapper">
          <span>© {2026} Martins-Jay</span>
          <span>·</span>
          <span>Designed & built by me</span>
        </div>

        <div className="bottom-closure-wrapper">
          <span> JavaScript</span>
          <span>· </span>
          <span> React </span>
          <span>· </span>
          <span>Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ contactObj }) {
  return (
    <div className="contact-item-wrapper">
      <div className="svg-wrapper">{contactObj.icon}</div>

      <div className="contact-desc">
        <p className="contact-label">{contactObj.label}</p>
        <a href={contactObj.href} className="contact-value">
          {contactObj.value}
        </a>
      </div>
    </div>
  );
}

export default Footer;
