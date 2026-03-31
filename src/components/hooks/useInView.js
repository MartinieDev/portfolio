import { useEffect, useRef, useState } from 'react';

export default function useInView(observerOptions = {}, allowToggle = true) {
  const ref = useRef(null); // DOM element to observe
  const [isInView, setIsInView] = useState(false);

  useEffect(
    function () {
      const observerCB = (entries) => {
        const entry = entries[0]; // Pick first element (we usually observe the section container)

        if (entry.isIntersecting) {
          setIsInView(true); // card has entered the viewport → set state to true & wait until it leaves
        } else if (allowToggle) {
          setIsInView(false); // card has left the viewport → set state to false and wait until it re-enters
        }
      };

      const defaultOptions = {
        root: null,
        threshold: 0.2,
        rootMargin: '0px',
      };

      const mergedOptions = { ...defaultOptions, ...observerOptions };

      const observer = new IntersectionObserver(observerCB, mergedOptions);

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    },
    [allowToggle, observerOptions],
  );

  return { ref, isInView };
}
