// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Footer.css';

// const CONTACT_LINKS = [
//   {
//     id: 'email',
//     label: 'Email',
//     value: 'codewithmartinie@gmail.com',
//     href: 'mailto:codewithmartinie@gmail.com',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="4" width="20" height="16" rx="2"/>
//         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//       </svg>
//     ),
//   },
//   {
//     id: 'phone',
//     label: 'Call',
//     value: '+234 810 283 7065',
//     href: 'tel:+2348102837065',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.96-1.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
//       </svg>
//     ),
//   },
//   {
//     id: 'whatsapp',
//     label: 'WhatsApp',
//     value: 'Chat on WhatsApp',
//     href: 'https://wa.me/2348102837065',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
//       </svg>
//     ),
//   },
//   {
//     id: 'linkedin',
//     label: 'LinkedIn',
//     value: 'martiniedev',
//     href: 'https://www.linkedin.com/in/martiniedev',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//       </svg>
//     ),
//   },
//   {
//     id: 'github',
//     label: 'GitHub',
//     value: 'Martins-Jay',
//     href: 'https://github.com/Martins-Jay',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//       </svg>
//     ),
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// function Footer() {
//   const [showBackTop, setShowBackTop] = useState(false);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowBackTop(window.scrollY > 400);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }

//   function copyEmail() {
//     navigator.clipboard.writeText('codewithmartinie@gmail.com');
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   }

//   const year = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       {/* Top border accent */}
//       <div className="footer-border" />

//       <div className="footer-inner">
//         {/* Heading */}
//         <motion.div
//           className="footer-heading"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <p className="footer-label">Get in touch</p>
//           <h2 className="footer-title">
//             Let's build something <span>worth using.</span>
//           </h2>
//           <p className="footer-sub">
//             Open to freelance, full-time roles, and the right collaborations.
//             Reach out through any of the channels below.
//           </p>
//         </motion.div>

//         {/* Contact Links */}
//         <motion.div
//           className="footer-links"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {CONTACT_LINKS.map((link) => (
//             <motion.a
//               key={link.id}
//               href={link.href}
//               target={link.id !== 'email' && link.id !== 'phone' ? '_blank' : undefined}
//               rel={link.id !== 'email' && link.id !== 'phone' ? 'noopener noreferrer' : undefined}
//               className="footer-link-card"
//               variants={itemVariants}
//               whileHover={{ y: -3 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="footer-link-icon">{link.icon}</div>
//               <div className="footer-link-text">
//                 <span className="footer-link-label">{link.label}</span>
//                 <span className="footer-link-value">{link.value}</span>
//               </div>
//               <div className="footer-link-arrow">↗</div>
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Copy email pill */}
//         <motion.div
//           className="footer-copy-row"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           <button className="copy-email-btn" onClick={copyEmail}>
//             <span className="copy-email-text">codewithmartinie@gmail.com</span>
//             <span className="copy-email-action">
//               <AnimatePresence mode="wait">
//                 {copied ? (
//                   <motion.span
//                     key="copied"
//                     initial={{ opacity: 0, y: 4 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -4 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     Copied ✓
//                   </motion.span>
//                 ) : (
//                   <motion.span
//                     key="copy"
//                     initial={{ opacity: 0, y: 4 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -4 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     Copy
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </span>
//           </button>
//         </motion.div>

//         {/* Bottom bar */}
//         <motion.div
//           className="footer-bottom"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//           <span className="footer-copy">
//             © {year} Martins-Jay. Designed & built by me.
//           </span>
//           <span className="footer-stack">
//             React · Vite · Framer Motion
//           </span>
//         </motion.div>
//       </div>

//       {/* Back to top */}
//       <AnimatePresence>
//         {showBackTop && (
//           <motion.button
//             className="back-to-top"
//             onClick={scrollToTop}
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 12 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             whileHover={{ y: -2 }}
//             aria-label="Back to top"
//           >
//             ↑
//           </motion.button>
//         )}
//       </AnimatePresence>
//     </footer>
//   );
// }

// export default Footer;


import { useState, useEffect } from ‘react’;
import { motion, AnimatePresence } from ‘framer-motion’;

const CONTACT_LINKS = [
{
id: ‘email’,
label: ‘Email me’,
value: ‘codewithmartinie@gmail.com’,
href: ‘mailto:codewithmartinie@gmail.com’,
icon: (
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<rect x="2" y="4" width="20" height="16" rx="2"/>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
</svg>
),
},
{
id: ‘phone’,
label: ‘Call me’,
value: ‘+234 810 283 7065’,
href: ‘tel:+2348102837065’,
icon: (
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.96-1.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>
),
},
{
id: ‘whatsapp’,
label: ‘WhatsApp’,
value: ‘wa.me/2348102837065’,
href: ‘https://wa.me/2348102837065’,
icon: (
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
</svg>
),
},
{
id: ‘linkedin’,
label: ‘LinkedIn’,
value: ‘martiniedev’,
href: ‘https://www.linkedin.com/in/martiniedev’,
icon: (
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
</svg>
),
},
{
id: ‘github’,
label: ‘GitHub’,
value: ‘Martins-Jay’,
href: ‘https://github.com/Martins-Jay’,
icon: (
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
</svg>
),
},
];

const C = {
bg: ‘#0a0f0d’,
accent: ‘#22c55e’,
accentDim: ‘rgba(34,197,94,0.12)’,
accentGlow: ‘rgba(34,197,94,0.06)’,
text: ‘#f0fdf4’,
muted: ‘rgba(240,253,244,0.4)’,
mutedStrong: ‘rgba(240,253,244,0.65)’,
border: ‘rgba(255,255,255,0.06)’,
};

const stagger = {
hidden: {},
visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
hidden: { opacity: 0, y: 18 },
visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function FooterReveal() {
const [copied, setCopied] = useState(false);
const [hovered, setHovered] = useState(null);
const [showTop, setShowTop] = useState(false);
const year = new Date().getFullYear();

useEffect(() => {
const el = document.getElementById(‘scroll-root’);
if (!el) return;
const fn = () => setShowTop(el.scrollTop > 300);
el.addEventListener(‘scroll’, fn);
return () => el.removeEventListener(‘scroll’, fn);
}, []);

function copyEmail() {
navigator.clipboard.writeText(‘codewithmartinie@gmail.com’);
setCopied(true);
setTimeout(() => setCopied(false), 2000);
}

return (
<>
<style>{`
@import url(‘https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@300;400;600;700;800&display=swap’);
* { box-sizing: border-box; margin: 0; padding: 0; }

```
    @keyframes breathe {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.15); }
    }

    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `}</style>

  <div
    id="scroll-root"
    style={{ height: '100vh', overflowY: 'scroll', fontFamily: "'Sora', sans-serif", background: C.bg }}
  >
    {/* ── Fake last section (relative, sits on top) ── */}
    <div style={{
      position: 'relative',
      zIndex: 2,
      background: C.bg,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: C.muted, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        Contact Section
      </span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: C.accentDim, letterSpacing: '0.1em' }}>
        ↓ scroll down to reveal footer
      </span>
    </div>

    {/* ── FOOTER — sticky, sits behind ── */}
    <footer style={{
      position: 'sticky',
      bottom: 0,
      zIndex: 1,
      minHeight: '100vh',
      background: C.bg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Ambient glow top center */}
      <div style={{
        position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 400,
        background: `radial-gradient(ellipse at center, rgba(34,197,94,0.07) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.018,
        backgroundImage: `linear-gradient(${C.accent} 1px, transparent 1px), linear-gradient(90deg, ${C.accent} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        padding: '4rem 1.5rem 0',
        maxWidth: 640, margin: '0 auto', width: '100%',
        gap: '3rem',
      }}>

        {/* ── BIG HEADLINE ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <motion.div variants={fadeUp} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: C.accent,
          }}>
            <div style={{ width: 18, height: 1, background: C.accent, opacity: 0.7 }} />
            Available for work
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent, animation: 'breathe 2s ease-in-out infinite' }} />
          </motion.div>

          <motion.h2 variants={fadeUp} style={{
            fontSize: 'clamp(2rem, 8vw, 3.2rem)',
            fontWeight: 800,
            color: C.text,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
          }}>
            Let's build something<br />
            <span style={{ color: C.accent }}>worth using.</span>
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            fontSize: '0.875rem', color: C.muted,
            fontWeight: 300, lineHeight: 1.8, maxWidth: 380,
          }}>
            Open to freelance, full-time roles, and the right collaborations.
            Pick a channel below and let's talk.
          </motion.p>
        </motion.div>

        {/* ── CONTACT LINKS — two column grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
          }}
        >
          {CONTACT_LINKS.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id !== 'email' && link.id !== 'phone' ? '_blank' : undefined}
              rel={link.id !== 'email' && link.id !== 'phone' ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              onHoverStart={() => setHovered(link.id)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.85rem 1rem',
                background: hovered === link.id ? C.accentGlow : 'transparent',
                borderRadius: '0.65rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s ease',
                cursor: 'pointer',
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: hovered === link.id ? C.accentDim : 'rgba(255,255,255,0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: hovered === link.id ? C.accent : C.mutedStrong,
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}>
                {link.icon}
              </div>

              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '0.62rem', letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: hovered === link.id ? C.accent : C.muted,
                  transition: 'color 0.2s ease',
                }}>
                  {link.label}
                </span>
                <span style={{
                  fontSize: '0.78rem', fontWeight: 500,
                  color: hovered === link.id ? C.text : C.mutedStrong,
                  whiteSpace: 'nowrap', overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.2s ease',
                }}>
                  {link.value}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── COPY EMAIL ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <button
            onClick={copyEmail}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.45rem 0.9rem',
              background: 'transparent', border: 'none',
              cursor: 'pointer', borderRadius: 100,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = C.accentGlow}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem', color: C.muted }}>
              codewithmartinie@gmail.com
            </span>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace", fontSize: '0.62rem',
              color: C.accent, minWidth: 38, textAlign: 'center',
            }}>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="d" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }}>
                    Copied ✓
                  </motion.span>
                ) : (
                  <motion.span key="c" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }}>
                    Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </motion.div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          borderTop: `1px solid ${C.border}`,
          flexWrap: 'wrap', gap: '0.5rem',
          maxWidth: 640, margin: '2rem auto 0', width: '100%',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.62rem', color: C.muted, opacity: 0.55 }}>
          © {year} Martins-Jay · Designed & built by me
        </span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '0.62rem', color: C.muted, opacity: 0.3 }}>
          React · Vite · Framer Motion
        </span>
      </motion.div>

    </footer>

    {/* ── BACK TO TOP ── */}
    <AnimatePresence>
      {showTop && (
        <motion.button
          onClick={() => document.getElementById('scroll-root').scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed', bottom: '1.5rem', right: '1.5rem',
            width: 38, height: 38, borderRadius: '50%',
            background: C.accent, color: '#0a0f0d',
            border: 'none', cursor: 'pointer',
            fontSize: '0.95rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(34,197,94,0.28)',
            zIndex: 100,
            fontWeight: 700,
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  </div>
</>
```

);
}