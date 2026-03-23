import { useEffect, useRef } from 'react';
import SectionHead from '../../reusables/SectionHead';

import './about.css';

const stats = [
  { value: '2', sign: '+', label: 'Years building' },
  { value: '3', sign: '+', label: 'Projects shipped' },
  { value: '3', sign: '+', label: 'Tech stacks' },
  { value: '∞', sign: '', label: 'Attention to detail' },
];

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
        <SectionHead title="About Me" TagLevel="h2" />

        <div className="section-divider"></div>

        <div className="about-body">
          {/* Text + buttons */}
          <div className="about-left">
            <div className="about-text" ref={aboutRef}>
              <p>
                I approach every project with care, turning ideas into web
                interfaces that are both functional and intuitive. My focus is
                on writing clean, maintainable code and structuring applications
                clearly, so every interaction feels smooth, reliable, and
                enjoyable.
              </p>

              <p>
                I don’t just focus on completing tasks. I design with
                scalability, maintainability, and long-term reliability in mind,
                paying attention to the details that elevate a product from
                functional to polished.
              </p>

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
                  My resume
                </a>
              </div>
            </div>
          </div>

          <div className="about-right">
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
          </div>
        </div>
        <div className="experience-summary"></div>
      </div>
    </div>
  );
}

export default About;
