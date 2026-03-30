import { useEffect, useRef, useState } from 'react';

export default function useInView(observerOptions = {}) {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(function () {
    const observerCB = (entries) => {
      const entry = entries[0]; // Pick first element (we usually observe the section container)

      if (entry.isIntersecting) {
        setIsInView(true);
      } 
    };

    const defaultOptions = {
      root: null,
      threshold: 0.2,
      rootMargin: '0px',
    };

    const mergedOptions = { ...defaultOptions, ...observerOptions };

    const observer = new IntersectionObserver(observerCB, mergedOptions);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return [containerRef, isInView];
}
