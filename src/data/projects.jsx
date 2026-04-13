export const projects = [
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
    subtitle:
      'Cryptocurrency Tracking with Secure Portfolio Monitoring',

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
