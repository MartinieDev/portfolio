import SectionHead from '../../reusables/SectionHead';
import { contactLinks } from '../../../data/contactLinks';

import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header section-head">
        <h2>
          Let's build something
          <br /> <span className="color-text">worth using.</span>
        </h2>
      </div>

      <div className="section-inner">
        <div className="contact-top-wrapper">
          <p className="contact-body-text">
            Open to freelance, full-time roles, and the right collaborations.
            Reach out through any of the channel below.
          </p>

          <div className="contact-links">
            {contactLinks.map((contactObj) => (
              <ContactItem key={contactObj.phone} contactObj={contactObj} />
            ))}
          </div>
        </div>

        <div className="line-demacator space"></div>

        <div className="contact-bottom-wrapper">
          <div className="contact-closure-content">
            <div className="top-closure-wrapper">
              <span>Copyright © {2026}</span>
              <span>·</span>
              <span>All Rights Reserved</span> <span>·</span>
              <span>Designed by MartinieDev</span>
            </div>

            <div className="bottom-closure-wrapper">
              <span> JavaScript</span>
              <span>·</span>
              <span> React</span>
              <span>·</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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

export default Contact;
