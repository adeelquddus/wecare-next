'use client';

/**
 * AnimatedCounter - counts up from 0 to `target` over `duration` ms with an
 * ease-out curve. Used for the member's points balance hero number.
 *
 * Respects prefers-reduced-motion: if the user prefers reduced motion we
 * just render the final value with no animation.
 */

import { useEffect, useRef, useState } from 'react';

interface Props {
  target: number;
  duration?: number;       // ms, default 1600
  className?: string;
  prefix?: string;
  suffix?: string;
  /** Locale string to format numbers - defaults to en-US */
  locale?: string;
}

export default function AnimatedCounter({
  target,
  duration = 1600,
  className,
  prefix,
  suffix,
  locale = 'en-US',
}: Props) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Reduced-motion guard
    if (typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    const start = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  const formatted = new Intl.NumberFormat(locale).format(value);

  return (
    <span className={className} aria-live="polite">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
