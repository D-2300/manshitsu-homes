import { useRef, useEffect } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

// Global scroll-based reveal system — works everywhere, no IntersectionObserver needed
const pendingEls = new Set<{ el: HTMLElement; delay: number }>();
let ticking = false;

function checkAll() {
  const vh = window.innerHeight;
  pendingEls.forEach((item) => {
    const rect = item.el.getBoundingClientRect();
    if (rect.top < vh + 40) {
      pendingEls.delete(item);
      const reveal = () => {
        item.el.classList.remove('sfi-hidden');
        item.el.classList.add('sfi-visible');
      };
      if (item.delay > 0) {
        setTimeout(reveal, item.delay * 1000);
      } else {
        reveal();
      }
    }
  });
  ticking = false;
}

function onScrollOrResize() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(checkAll);
  }
}

// Single global listener
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize, { passive: true });
}

export default function ScrollFadeIn({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hide via JS class (content visible by default if JS fails)
    el.classList.add('sfi-hidden');

    const item = { el, delay };
    pendingEls.add(item);

    // Check immediately (element might already be in viewport)
    requestAnimationFrame(() => checkAll());

    return () => { pendingEls.delete(item); };
  }, [delay]);

  return (
    <div ref={ref} className="sfi">
      {children}
    </div>
  );
}
