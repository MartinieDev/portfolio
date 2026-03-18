export const projects = [
  {
    id: 'cryptospy',
    logoInitials: 'CS',
    featured: false,
    title: 'CryptoSpy',
    subtitle:
      'Real-Time Cryptocurrency Tracking with Secure Portfolio Monitoring',
    description:
      'A JavaScript web app that streams live crypto prices from Binance and lets users securely track external holdings without connecting their accounts.',
    tags: ['JavaScript', 'WebSockets', 'Dashboard'],
    stack: ['Javascript', 'Tailwind CSS', 'Firebase'],
    images: [
      // '/images/moodpad/moodpad.jpg',
      // '/images/moodpad/moodpad-log-view.jpg',
      '/images/moodpad/moodpad-history-view.jpg',
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

  {
    id: 'moodpad',
    logoInitials: 'MP',
    featured: false,
    title: 'MoodPad',
    subtitle: 'Mood-Based Insights, Recommendations, and Tracking',
    description:
      'A React web app that helps users track their moods, view streaks, history, and get personalized recommendations for movies and sounds based on their mood.',
    tags: ['React', 'UI', 'Dashboard'],
    stack: ['React', 'CSS', 'Rest API'],
    images: [
      // '/images/cryptospy/add-holdings-view.jpg',
      '/images/cryptospy/cryptospy.jpg',
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
];
