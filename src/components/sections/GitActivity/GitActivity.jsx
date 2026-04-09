import { useState, useEffect } from 'react';
import { fetchContributions } from './fetchContributions';
import { motion } from 'framer-motion';
import ContributionGraph from './ContributionGraph/ContributionGraph';
import SectionHead from '../../reusables/SectionHead';
import './gitActivity.css';
import ArrowRightIcon from '../../../assets/icons/techIcons/ArrowRight';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 160,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const footerVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function scrollToContact() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behaviour: 'smooth',
  });
}

function GitActivity() {
  const [weeks, setWeeks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        const data = await fetchContributions();
        setWeeks(data);
        console.log(data);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError('Failed to load activity.');
      } finally {
        setLoading(false);
      }
    }

    loadContributions();

    return () => controller.abort();
  }, []);

  return (
    <motion.section
      id="git-activity"
      className="git-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionHead
        TagLevel="h2"
        title="Contributions"
        subtitle="Every square is a commit. Every commit is a progress."
      />

      <div className="git-card">
        {loading && <p className="git-state">Loading activity...</p>}
        {error && <p className="git-state git-error">{error}</p>}
        {!loading && !error && <ContributionGraph weeks={weeks} />}
      </div>

      <motion.div
        className="git-footer"
        variants={footerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="git-footer-content">
          <div className="git-footer-text-wrapper">
            <p className="git-footer-que">Got a project in mind?</p>

            <p className="git-footer-text">
              Whether it’s a product, a freelance build, or a growing team, I’m
              open to the right opportunity.
            </p>
          </div>

          <button
            href="https://github.com/Martins-Jay?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="git-btn btn primary"
            onClick={scrollToContact}
          >
            <span>Let's talk</span>

            <div className="icon-wrapper">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default GitActivity;
