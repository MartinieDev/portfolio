import { useEffect, useRef } from 'react';
import SectionHead from '../../reusables/SectionHead';

import './about.css';

function About() {
  const aboutRef = useRef(null);

  useEffect(function () {
    console.log(aboutRef.current);
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observerCB = function (e) {
      e.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    };

    const observer = new IntersectionObserver(observerCB, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
  }, []);

  return (
    <div id="about" className="about-section">
      <div className="container about-grid">
        <div>
          <SectionHead title="About me" TagLevel="h2" />

          <div className="section-divider"></div>

          <div className="about-text" ref={aboutRef}>
            <p>
              I approach every project with care, turning ideas into web
              interfaces that are both functional and intuitive. My focus is on
              writing clean, maintainable code and structuring applications
              clearly, so every interaction feels smooth, reliable, and
              enjoyable.
            </p>

            <p>
              I don’t just focus on completing tasks. I design with scalability,
              maintainability, and long-term reliability in mind, paying
              attention to the details that elevate a product from functional to
              polished.
            </p>

            <div className="hero-actions">
              <a class="btn primary" href="#contact">
                Get In Touch
              </a>

              <a
                class="btn secondary"
                href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                My resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
