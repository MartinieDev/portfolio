export const projects = [
  {
    id: 'tradevo',
    logoInitials: 'TV',
    featured: true,
    title: 'Tradevo',
    subtitle: 'A Complete React E-Commerce Experience',
    description: `Tradevo is a full-featured e-commerce web app built with React 18 and Vite. It covers the complete shopping flow — browsing, filtering, product detail, cart, wishlist, and checkout — across 60+ products in 8 categories.\n\nBuilt with five Context + useReducer stores, URL-persistent filters via useSearchParams, lazy-loaded routes, and smooth UI transitions with Framer Motion. The architecture is modular and scalable, designed to mirror how production storefronts are actually structured.`,
    stack: [
      'React 18',
      'Vite',
      'React Router v6',
      'Context API',
      'useReducer',
      'Axios',
      'Framer Motion',
      'CSS Modules',
    ],
    images: [
      '/project_images/tradevo/tradevo.jpeg',
      // '/project_images/tradevo/product.jpg',
      // '/project_images/tradevo/cart.jpg',
    ],
    links: {
      live: 'https://tradevo-app.vercel.app',
      repo: 'https://github.com/MartinieDev/tradevo-app',
    },
    caseStudy: {
      role: 'Frontend Engineer',
      problem:
        'Building an e-commerce UI that actually holds together — persistent filters, consistent cart state, auth, wishlists, and dark mode all working across every route simultaneously — without the architecture falling apart under the weight of it.',
      solution: [
        'URL-persistent shop filters using useSearchParams — filter state survives refresh and any view is shareable as a direct link',
        'Five isolated Context + useReducer stores (Cart, Auth, Wishlist, Filter, Theme) composing cleanly at the app level with no state bleed',
        'Windowed pagination built from scratch — 1 2 … 7 8 style — as a fully reusable component',
        'Custom useProductDetail hook separating all product page logic from the UI layer',
        'Lazy-loaded routes with React.lazy and Suspense keeping the initial bundle lean',
      ],
      results: [
        'Filter and sort state is URL-driven and shareable across all 60+ products',
        'Five global stores running in parallel with zero conflicts across 8 categories',
        'Modular codebase structured for readability and real-world handoff',
        'Production-grade bugs caught and resolved during development',
      ],
    },
  },
  {
    id: 'moodpad',
    logoInitials: 'MP',
    featured: false,
    title: 'MoodPad',
    subtitle: 'Mood-Based Insights, Recomendation & Tracking',
    description: `MoodPad is a React web app that lets users track and reflect on their moods over time. It features an intuitive dashboard where users can add, edit, or delete mood entries and view their mood trends at a glance.\n 
    Built with reusable React components and CSS, MoodPad leverages localStorage to persist data and demonstrates proficiency in state management and component-driven architecture.`,
    stack: ['React', 'CSS', 'REST API'],
    images: [
      '/project_images/moodpad/moodpad-overview-view.jpg',
      // '/project_images/moodpad/moodpad-history-view.jpg',
      // '/images/moodpad-images/moodpad-overview-view.jpg',
    ],
    links: {
      live: 'https://moodpad-app.vercel.app',
      repo: 'https://github.com/Martins-Jay/mood-pad',
    },
    caseStudy: {
      role: 'Frontend Engineer',
      problem:
        'Users wanted a simple way to track, understand, and gain insights into their moods while getting personalized recommendations for sounds and movies.',
      solution: [
        'Built a mood tracking dashboard with logs, streaks, and history to give users a clear view of their emotional patterns',
        'Fetched personalized music and movie recommendations using APIs based on the user’s current mood',
        'Implemented filtering and sorting to make history and recommendations easy to navigate',
        'Designed a responsive and intuitive UI with plain CSS',
      ],
      results: [
        'Users can track their moods and see patterns over time',
        'Recommendations for music and movies improve engagement and user satisfaction',
        'History and streaks motivate consistent use of the app',
        'Dashboard is clean, responsive, and enjoyable on all devices',
      ],
    },
  },

  {
    id: 'cryptospy',
    logoInitials: 'CS',
    featured: false,
    title: 'CryptoSpy',
    subtitle: 'Cryptocurrency Tracking with Secure Portfolio Monitoring',

    description: `CryptoSpy is a JavaScript web app that streams live cryptocurrency prices from Binance and lets users securely monitor holdings across external platforms without connecting accounts. It features a dynamic dashboard where users can add, edit, or remove assets and see real-time performance updates.\n 
    Built with modular JavaScript, Firestore and Firebase authentication, it demonstrates proficiency in API integration and handling asynchronous data.`,

    stack: ['Javascript', 'Tailwind CSS', 'Firebase'],
    images: [
      // '/images/moodpad/moodpad.jpg',
      // '/images/moodpad/moodpad-log-view.jpg',
      '/project_images/cryptospy/cryptospy-overview-view.jpg',
      // '/images/moodpad/moodpad-overview-view.jpg',
    ],
    links: {
      live: 'https://cryptospy-app.vercel.app',
      repo: 'https://github.com/Martins-Jay/crypto-spy',
    },
    caseStudy: {
      role: 'Frontend Engineer',
      problem:
        'Users needed a simple, secure way to track crypto prices and their holdings from different platforms all in one place and in real time.',
      solution: [
        'Stream live cryptocurrency prices from Binance using WebSockets for instant updates',
        'Add Firebase authentication with a guided onboarding flow so login feels smooth and safe',
        'Build a responsive dashboard with Tailwind CSS supporting light, dark, and system themes',
        'Allow users to track holdings manually from other platforms without connecting external accounts',
      ],
      results: [
        'Users can see live prices and track their portfolio easily and securely',
        'The dashboard feels clean and consistent across desktop and mobile',
        'Authentication and onboarding are intuitive giving users confidence in the app',
      ],
    },
  },
];
