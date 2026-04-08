import { useEffect, useRef } from 'react';
import SectionHead from '../../reusables/SectionHead';

import './about.css';

function About() {
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(function () {
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
    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  return (
    <section id="about" className="about-section container">
      <SectionHead
        title="About"
        subtitle="Engineer by Training. Developer by Choice"
        TagLevel="h2"
      />

      <div className="about-body">
        {/* Text + buttons */}
        <div className="about-left">
          <div className="about-text">
            <p>
              I'm Martins, a frontend developer who came into tech through
              Electrical Engineering. That path taught me to see systems,
              patterns, and connections before writing a single line of code.
            </p>
            <p>
              I’m drawn to the details that shape an experience, from thoughtful
              spacing to purposeful animations and components designed to be
              easy to work with. Every decision is intentional, and every
              interaction earns its place.
            </p>
            <p>
              Beyond coding, I explore interfaces and work toward experiences
              that feel seamless, refined, and easy to use.
            </p>
          </div>

          <div className="hero-actions" style={{ margin: '1rem 0' }}>
            <a className="btn primary" href="#contact">
              Get In Touch
            </a>

            <a
              className="btn secondary"
              href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
