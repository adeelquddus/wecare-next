'use client';

/**
 * MemberAvatar - small client component for the loyalty hero.
 *
 * Renders the member's profile photo if present, with a graceful
 * onError fallback to initials. The fallback covers two cases:
 *   1. The photo URL is blocked by the Content Security Policy.
 *   2. The image 404s or the provider CDN is offline.
 *
 * Used inside the otherwise-server MemberDashboard so we can keep
 * everything else as a server component.
 */

import { useState } from 'react';

interface Props {
  src?: string | null;
  initials: string;
  className?: string;
  fallbackClassName?: string;
}

export default function MemberAvatar({
  src,
  initials,
  className,
  fallbackClassName,
}: Props) {
  const [errored, setErrored] = useState(false);

  const showImage = src && !errored;

  if (showImage) {
    /* eslint-disable-next-line @next/next/no-img-element */
    return (
      <img
        src={src}
        alt=""
        className={className}
        referrerPolicy="no-referrer"
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <span className={fallbackClassName} aria-hidden="true">
      {initials}
    </span>
  );
}
