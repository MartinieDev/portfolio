import { useState, useEffect } from 'react';
import { fetchContributions } from '../../hooks/fetchContributions';
import { motion } from 'framer-motion';
import ContributionGraph from './ContributionGraph/ContributionGraph';
import SectionHead from '../../reusables/SectionHead';
import './gitActivity.css';

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHead
        TagLevel="h2"
        title="Always building."
        subtitle="A honest look at my GitHub activity — every cell is a real commit."
      />

      <div className="git-card">
        {loading && <p className="git-state">Loading activity...</p>}
        {error && <p className="git-state git-error">{error}</p>}
        {!loading && !error && <ContributionGraph weeks={weeks} />}
      </div>
    </motion.section>
  );
}

export default GitActivity;
