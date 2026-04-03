import { useRef, useState, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollFadeIn({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver is not supported, show immediately
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Also check on mount if element is already in viewport (e.g. fast scroll / back nav)
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
    }
  }, [visible]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
