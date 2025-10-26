import { useEffect, useRef, useState } from 'react';

const ParallaxScroll = ({ children, speed = 0.5, className = '' }) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const scrolled = window.pageYOffset;
        setOffsetY((scrolled - elementTop) * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxScroll;
