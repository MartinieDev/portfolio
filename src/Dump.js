// function ProjectRow({ projectObj }) {
//   return (
//     <div className="work-card word-card-with-preview">
//       <div className="project-images-wrapper">
//         <ProjectImages projectImg={projectObj.images} />
//       </div>

//       <div className="work-body">
//         <div className="work-content">
//           <div className="logo-initials">{projectObj.logoInitials}</div>

//           <div className="left-line-bar"></div>
//         </div>

//         <div className="project-details-wrpper">
//           <p className="project-title">{projectObj.title}</p>

//           {projectObj.subtitle ? (
//             <p className="muted-subtitle">{projectObj.subtitle}</p>
//           ) : null}

//           <p className="muted-description" style={{ whiteSpace: 'pre-line' }}>
//             {projectObj.description}
//           </p>

//           <div className="tags-wrapper">
//             {projectObj.tags.map((tag) => (
//               <span key={tag} className="tag-pill">
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <div className="stack-section">
//             <div className="stack-label">Skill stack used:</div>

//             <div className="stack-wrapper">
//               {projectObj.stack.map((stack) => (
//                 <span className="stack-pill">{stack}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="project-actions">
//         <button className="btn secondary len1" type="button">
//           Case study
//         </button>

//         <a href={projectObj.links.live} target="blank" rel="morefferer">
//           <button className="btn primary len1" type="button">
//             Visit website
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }

// <p>
//   I approach every project with care, turning ideas into web
//   interfaces that are both functional and intuitive. My focus is
//   on writing clean, maintainable code and structuring applications
//   clearly, so every interaction feels smooth, reliable, and
//   enjoyable.
// </p>

// <p>
//   I don’t just focus on completing tasks. I design with
//   scalability, maintainability, and long-term reliability in mind,
//   paying attention to the details that elevate a product from
//   functional to polished.
// </p>

// <p>
//   I'm a frontend developer focused on building and improving real
//   products. I hold a degree in Electrical and Electronic
//   Engineering, which has helped me develop a strong
//   problem-solving mindset that I now apply to building interfaces
//   that work smoothly and scale effectively.
// </p>

// <p>
//   Through structured learning and hands-on projects, I've built
//   applications using both MVC patterns and component-based
//   architectures. I focus on responsive layouts, managing
//   application state, and writing clean, maintainable code, always
//   keeping the user experience at the heart of every decision.
// </p>

// LEVEL 1
// 1. users.filter(userObj => userObj.active === true)
// 2. users.map(userObj => userObj.name)
// 3. users.reduce((acc, curVal) => acc + curVal, 0)
// 4. const unique =[...new Set(arr)]

// LEVEL 2
// 1. users
//   .filter((userObj) => userObj.age >= 18)
//   .sort((a, b) => a.name - b.name)
//   .map((userObj) => userObj.name);

// 2. function freqCounter(arr) {
//   const organized = {}

//   for(let i = 0; i < arr.length; i++) {
//     if(organized[arr[i]]) {
//       organized[arr[i]] =  organized[arr[i]] + 1
//     } else {
//       organized[arr[i]] =   1
//     }
//   }

//   return organized;
// }

// 3. no idea

// 4. function flatArr(arr) {
//   const newArr = [];

//   for(let i=0; i<arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       newArr.push(...arr[i])
//     }
//   } else {
//     newArr.push(arr[i])
//   }
//   return newArr
// }

// function grouped(arr) {
//   const storage = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!storage[arr[i].age]) {
//       storage[arr[i].age] = [arr[i].name];
//     } else {
//       storage[arr[i].age].push(arr[i].name);
//     }
//   }

//   return storage;
// }

// function realUsers(users) {
//   return users.filter((userObj) => userObj.name !== '' && userObj.age !== null);
// }

// function sort(users) {
//   return users
//     .sort((a, b) => a.age - b.age)
//     .map((dataObj) => dataObj.name)
//     .sort();
// }
.process-container-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.process-line {
  position: absolute; /* sits behind steps */
  left: 50%; /* center horizontally */
  top: 0;
  width: 2px; /* thin line */
  height: 100%; /* spans full container */
  background-color: var(--accent);
  transform: translateX(-50%); /* center line exactly */
  z-index: 0; /* behind steps */
}

.my-process-section {
  top: 0;
  margin: 1rem 0;
  padding: 1rem 1.5rem 3.5rem;
  /* border-top: 1px solid var(--border-muted); */
  /* border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem; */
  background: var(--container-bg);
}

/* ProcessStep */
.process-step-container {
  display: flex;
  align-items: flex-start; /* top-aligned */
  gap: 1rem;
  margin: 2rem 0;
  position: relative; /* to be above line */
  z-index: 1; /* step sits above line */
  width: 100%; /* optional for full width */
  max-width: 600px; /* optional to constrain layout */
  background-color: #292e33;
}

.process-number {
  font-family: 'satoshi', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  color: transparent;
  /* -webkit-text-stroke: 1px var(--accent); */
}

.process-left {
  flex-direction: row;
}

.process-right {
  flex-direction: row-reverse;
  text-align: right;
}

.process-tag {
  font-family: 'satoshi', sans-serif;
  color: var(--accent);
  font-weight: 800;
  font-size: 1.1rem;
}

.process-title {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.process-description {
  color: var(--muted);
  font-weight: 300;
  font-size: 0.8rem;
}
