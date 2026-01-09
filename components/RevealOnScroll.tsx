import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}

const RevealOnScroll: React.FC<Props> = ({ children, direction = 'left', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 }); // Lower threshold for earlier trigger

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transformClass = direction === 'left' ? '-translate-x-20' : 'translate-x-20';

  return (
    <div
      ref={domRef}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' 
      }}
      className={`transition-all duration-[1200ms] transform ${
        isVisible 
          ? 'translate-x-0 opacity-100 scale-100' 
          : `${transformClass} opacity-0 scale-95`
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;