'use client';

import { useEffect, useRef } from 'react';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'bounce' | 'popup' | 'checkin' | 'blur' | 'rotate';

interface RevealProps {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4;
  variant?: RevealVariant;
  className?: string;
}

export default function Reveal({ children, delay, variant = 'up', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : '';
  const variantClass = variant !== 'up' ? ` reveal-${variant}` : '';

  return (
    <div ref={ref} className={`reveal${variantClass}${delayClass}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
