'use client';

import { useEffect, useRef } from 'react';
import styles from './ReadingProgressBar.module.css';

/**
 * Fixed reading-progress bar at the very top of the page.
 * Uses a CSS custom property `--progress` (0–1) updated via rAF.
 */
export default function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      if (barRef.current) {
        barRef.current.style.setProperty('--progress', String(progress));
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    update(); // initial paint
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={barRef} className={styles.progressBar} aria-hidden="true" />
  );
}
