/* DARK */
/* html[data-theme='dark'] {
  --bg: #0b1220;
  --softBg: rgba(103, 97, 97, 0.111);
  --border: rgba(255, 255, 255, 0.1);
  --border-muted: rgba(163, 163, 163, 0.2);
  --text: rgba(255, 255, 255, 0.987);
  --muted: rgba(255, 255, 255, 0.73);
  --availableBg: #1fbdb81b;
  --accent: #0affda;
  --accent2: #13c6ab;
  --accent3: #60a5fa; 
  --navBg: rgba(11, 18, 32, 0.7);
  --cardBg: rgba(96, 165, 250, 0.1);
  --container-bg: #7b7c7e13;
  --line-bg: #4eb5a6d3;
  --shadow: 0 18px 50px rgba(28, 32, 32, 0.35);
  --body-bg:
    radial-gradient(
      900px 500px at 15% 10%,
      color-mix(in srgb, var(--accent) 16%, transparent),
      transparent 55%
    ),
   
    radial-gradient(
        900px 500px at 85% 20%,
        color-mix(in srgb, var(--accent2) 1%, transparent),
        transparent 55%
      ),
    var(--bg);
  --git-link: #3efa83;
} */


/* LIGHT */
/* html[data-theme='light'] {
  --bg: #f6f7fb;

  --border: rgba(15, 23, 42, 0.1);
  --border-muted: rgba(8, 1, 1, 0.09);
  --text: rgba(28, 30, 36, 0.769);
  --text-white: #f6f7fb;
  --muted: rgb(23, 27, 33);
  --availableBg: #0000009c;
  --accent: #1fd68de4;
  --accent2: #0517109b;
  --accent3: #0ea5e9; 
  --navBg: rgba(219, 222, 232, 0.72);
  --cardBg: rgba(60, 169, 219, 0.07);
  --container-bg: #28292a17;
  --line-bg: #0a3831e4;
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.148);
  --body-bg: #28292a17;
  --git-link: #0da143;
} */






















  /*-------------------------------------------------*/ 
  /* Container for section */
.my-process-section {
  position: relative;
  padding: 4rem 1.5rem 5rem;
  background: var(--container-bg);
}

/* Section timeline wrapper */
.my-process-section .section-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.process-container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
}

/* Step container */
.process-step-container {
  display: flex;
  align-items: flex-start; /* top aligned */
  gap: 1rem;
  margin: 2.5rem 0;
  position: relative;
  z-index: 1; /* above line segments */
  width: 100%;
  max-width: 600px;
}

.step-inner {
  display: flex;
  align-items: flex-start; /* top alignment */
  gap: 1rem;
  width: 100%;
}

/* Left / Right alternation */
.process-left .step-inner {
  flex-direction: row;
}

.process-right .step-inner {
  flex-direction: row-reverse;
  text-align: right;
}

/* Number styling */
.process-number {
  font-family: 'satoshi', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px var(--accent2);
  position: relative;
  z-index: 2;
}

/* Tag, title, description */
.process-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.process-tag {
  font-family: 'satoshi', sans-serif;
  color: var(--accent);
  font-weight: 800;
  font-size: 1.1rem;
}

.process-title {
  color: var(--line-bg);
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.process-description {
  color: var(--muted);
  font-weight: 300;
  font-size: 0.8rem;
}

/* Line segment connecting to next step */
.process-line-segment {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 1px;
  height: 2rem;
  background-color: var(--border);
  z-index: 0;
}

/* ==============================
  md+ — 768px
=============================== */
@media (min-width: 768px) {
  .my-process-section {
    padding: 5.5rem 2rem;
  }

  .process-container {
    display: flex;
    width: 5;
    gap: 2rem;
  }

  .process-step-container {
    padding: 1.6rem 0;
  }

  .process-number {
    font-size: 4.3rem;
    min-width: 5.4rem;
  }

  .process-tag {
    font-size: 1.5rem;
  }

  .process-title {
    font-size: 1.2rem;
  }

  .process-description {
    font-size: 0.9rem;
  }
}
/* ==============================
  lg+ — 1024px
=============================== */
@media (min-width: 1024px) {
  .my-process-section {
    padding: 6rem 2rem;
  }

  .my-process-section .section-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 3.5rem;
    row-gap: 0;
    align-items: start;
  }

  /* SectionHead occupies left of top row */
  .my-process-section .section-head {
    grid-column: 1;
    grid-row: 1;
  }

  /* Aside fills right of top row */
  .process-aside {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    grid-column: 2;
    grid-row: 1;
    align-self: end;
    padding-bottom: 0.2rem;
  }

  .process-aside p {
    font-size: 0.88rem;
    font-weight: 300;
    color: var(--muted);
    line-height: 1.72;
    margin: 0;
  }

  /* Process container spans full width below */
  .process-container {
    grid-column: 1 / -1;
    grid-row: 2;
    align-items: center;
    margin-top: 2.5rem;
    gap: 0;
  }

  .process-step-container {
    min-width: 800px;
    width: 100%;
    padding: 1rem 0;
  }

  /* Restore left/right alternation */
  .process-left .step-inner {
    flex-direction: row;
    text-align: left;
  }

  .process-right .step-inner {
    flex-direction: row-reverse;
    text-align: right;
  }

  .process-right .process-content {
    align-items: flex-end;
  }

  .process-number {
    font-size: 4.5rem;
    min-width: 6rem;
    -webkit-text-stroke: 1.5px var(--accent2);
    opacity: 0.6;
  }

  .process-tag {
    font-size: 1.8rem;
  }

  .process-title {
    font-size: 1.2rem;
  }

  .process-description {
    font-size: 0.95rem;
    max-width: 340px;
  }
}

/* ==============================
  xl+ — 1280px
=============================== */
@media (min-width: 1280px) {
  .my-process-section {
    padding: 6rem 0;
  }

  .my-process-section .section-inner {
    column-gap: 4rem;
  }

  .process-step-container {
    max-width: 700px;
  }

  .process-description {
    max-width: 380px;
  }

  .process-line-segment {
    display: none;
  }
}

/* ==============================
  2xl+ — 1536px
=============================== */
@media (min-width: 1536px) {
  .my-process-section {
    padding: 7rem 0;
  }

  .process-step-container {
    min-width: 1080px;
  }

  .process-number {
    font-size: 6rem;
    min-width: 6.5rem;
  }

  .process-tag {
    font-size: 1.9rem;
  }

  .process-title {
    font-size: 1.35rem;
  }

  .process-description {
    font-size: 1rem;
    max-width: 420px;
  }

  .process-aside p {
    font-size: 0.92rem;
  }
}

/* ==============================
  3xl+ — 1920px
=============================== */
@media (min-width: 1920px) {
  .my-process-section {
    padding: 8rem 0;
  }

  .process-step-container {
    min-width: 1100px;
  }

  .process-number {
    font-size: 7rem;
    min-width: 7.5rem;
  }

  .process-tag {
    font-size: 2.05rem;
  }

  .process-title {
    font-size: 1.45rem;
  }

  .process-description {
    font-size: 1rem;
    max-width: 490px;
  }

  .process-aside p {
    font-size: 1rem;
  }
}

/* ==============================
  4xl+ — 2560px
=============================== */
@media (min-width: 2560px) {
  .process-step-container {
    max-width: 1320px;
  }

  .process-number {
    font-size: 5rem;
    min-width: 7rem;
  }

  .process-tag {
    font-size: 1.6rem;
  }

  .process-title {
    font-size: 1.3rem;
  }

  .process-description {
    font-size: 1.18rem;
    max-width: 600px;
  }

  .process-aside p {
    font-size: 1.15rem;
  }
}
