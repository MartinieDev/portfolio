import { useEffect, useRef } from 'react';
import SectionHead from '../../reusables/SectionHead';

import './about.css';

// const stats = [
//   { value: '2', sign: '+', label: 'Years building' },
//   { value: '5', sign: '+', label: 'Projects shipped' },
//   { value: '3', sign: '+', label: 'Tech stacks' },
//   { value: '∞', sign: '', label: 'Attention to detail' },
// ];

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
    <div id="about" className="about-section container">
      <div>
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
                I’m drawn to the details that shape an experience, from
                thoughtful spacing to purposeful animations and components
                designed to be easy to work with. Every decision is intentional,
                and every interaction earns its place.
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

            {/* <div className="about-right">
              <div className="about-stats" ref={statsRef}>
                {stats.map((statData, i) => (
                  <div
                    className="stat-card"
                    key={i}
                    style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
                  >
                    <div className="stat-value">
                      {statData.value}
                      {statData.sign && (
                        <span className="sign">{statData.sign}</span>
                      )}
                    </div>
                    <div className="stat-label">{statData.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
