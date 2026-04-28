/**
 * Brand-aligned animated icon set.
 *
 * Every icon:
 *   • is a self-contained inline SVG React component
 *   • paints with brand CSS variables - no hard-coded greys
 *   • supports an optional `animate` prop that triggers a subtle motion
 *     (pulse / wiggle / spin / float / twinkle / draw)
 *   • respects prefers-reduced-motion via the global keyframes CSS
 *
 * Conventions:
 *   • viewBox 0 0 24 24
 *   • stroke-width 1.8 (visually balanced at 24px and scales nicely)
 *   • default size 22px - matches the surrounding body text x-height
 *   • props: { size?: number, className?: string, animate?: boolean, color?: string }
 *     when `color` is set it overrides the brand variable for that icon's stroke colour.
 */

import React from 'react';

export interface IconProps {
  size?: number;
  className?: string;
  animate?: boolean;
  color?: string;        // optional override - defaults to brand var per-icon
}

/* Tiny helper that adds the `icon` base class + an optional animation class.
   The animation classes (icon-pulse / icon-spin / etc.) live in globals.css. */
const cls = (animate: boolean | undefined, anim: string, extra?: string) =>
  ['icon', animate ? `icon-${anim}` : '', extra ?? ''].filter(Boolean).join(' ');

const baseSvgProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true as const,
});

/* ───────────────────────── communication ──────────────────────────── */

export const PhoneIcon = ({ size = 22, className, animate = true, color }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'wiggle', className)}
       style={color ? { color } : undefined}>
    <path
      d="M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
      stroke="var(--color-primary)" strokeWidth="1.8" strokeLinejoin="round"
      fill="var(--color-primary-50)"
    />
    {/* ringer waves */}
    <path d="M16 3l1 1.5M19 2l1 2M19 6l2-1" stroke="var(--color-primary)"
          strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const MailIcon = ({ size = 22, className, animate = true, color }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'float', className)}
       style={color ? { color } : undefined}>
    <rect x="3" y="6" width="18" height="13" rx="2"
          stroke="var(--color-primary)" strokeWidth="1.8"
          fill="var(--color-primary-50)" />
    <path d="M3 8l9 6 9-6" stroke="var(--color-primary)" strokeWidth="1.8" />
    <circle cx="12" cy="14" r="1.4" fill="var(--color-primary)" />
  </svg>
);

export const ChatIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'float', className)}>
    <path d="M21 11.5c0 4.14-4.03 7.5-9 7.5-1.32 0-2.58-.24-3.71-.67L3 20l1.4-4A7.39 7.39 0 0 1 3 11.5C3 7.36 7.03 4 12 4s9 3.36 9 7.5z"
          fill="var(--color-secondary)" stroke="var(--color-secondary)"
          strokeWidth="1.4" strokeLinejoin="round" opacity="0.18" />
    <circle cx="8.5" cy="11.5" r="1" fill="var(--color-secondary)" />
    <circle cx="12"  cy="11.5" r="1" fill="var(--color-secondary)" />
    <circle cx="15.5" cy="11.5" r="1" fill="var(--color-secondary)" />
  </svg>
);

/* ───────────────────────── medical ────────────────────────────────── */

export const StethoscopeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <path d="M5 3v6a4 4 0 0 0 8 0V3" stroke="var(--color-primary)"
          strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="5" cy="3" r="1.4" fill="var(--color-primary)" />
    <circle cx="13" cy="3" r="1.4" fill="var(--color-primary)" />
    <path d="M9 13v3a3 3 0 0 0 6 0v-3" stroke="var(--color-primary)"
          strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <circle cx="18" cy="14" r="3" stroke="var(--color-primary)"
            strokeWidth="1.8" fill="#fff" />
    <circle cx="18" cy="14" r="1" fill="#EF4444" className="icon-heart-dot" />
  </svg>
);

export const HeartIcon = ({ size = 22, className, animate = true, color }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'heartbeat', className)}>
    <path
      d="M12 21s-7.5-5-7.5-11A4.5 4.5 0 0 1 12 6.5 4.5 4.5 0 0 1 19.5 10c0 6-7.5 11-7.5 11z"
      fill={color ?? '#EF4444'}
      stroke={color ?? '#DC2626'}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const PillsIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'roll', className)}>
    <rect x="2.5" y="9" width="19" height="6" rx="3"
          fill="var(--color-primary-50)" stroke="var(--color-primary)" strokeWidth="1.8" />
    <line x1="12" y1="9" x2="12" y2="15" stroke="var(--color-primary)" strokeWidth="1.8" />
    <rect x="2.5" y="9" width="9.5" height="6" rx="3" fill="var(--color-primary)" opacity="0.85" />
    <circle cx="6" cy="12" r="0.7" fill="#fff" opacity="0.7" />
    <circle cx="9" cy="12" r="0.7" fill="#fff" opacity="0.7" />
  </svg>
);

export const SyringeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'wiggle', className)}>
    <line x1="3" y1="21" x2="9" y2="15" stroke="var(--color-primary)"
          strokeWidth="1.8" strokeLinecap="round" />
    <rect x="9" y="9" width="9" height="6" rx="1" transform="rotate(-45 9 9)"
          fill="var(--color-primary-50)" stroke="var(--color-primary)" strokeWidth="1.8" />
    <line x1="14" y1="4" x2="20" y2="10" stroke="var(--color-primary)" strokeWidth="1.8" />
    <circle cx="6" cy="18" r="1" fill="#10B981" />
  </svg>
);

export const MicroscopeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <rect x="9" y="3" width="3" height="6" rx="1" fill="var(--color-primary)" />
    <path d="M7 9h7l1 4H6z" fill="var(--color-primary-50)" stroke="var(--color-primary)" strokeWidth="1.6" />
    <path d="M10 13v3M14 13v3" stroke="var(--color-primary)" strokeWidth="1.6" strokeLinecap="round" />
    <rect x="4" y="17" width="16" height="3" rx="1" fill="var(--color-primary)" />
    <circle cx="6" cy="11" r="1" fill="#F59E0B" />
  </svg>
);

export const TestTubeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <path d="M9 2h6M10 2v15a3 3 0 0 0 4 0V2" stroke="var(--color-primary)"
          strokeWidth="1.8" strokeLinejoin="round" fill="var(--color-primary-50)" />
    <path d="M10 13a3 3 0 0 0 4 0v4a3 3 0 0 1-4 0z" fill="#10B981" />
    <circle cx="11.5" cy="14.5" r="0.6" fill="#fff" opacity="0.8" />
  </svg>
);

export const ScaleIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <path d="M12 3v17M5 20h14" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 6l-3 6h6z M19 6l-3 6h6z" fill="var(--color-primary-50)"
          stroke="var(--color-primary)" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="3" r="1.4" fill="var(--color-primary)" />
  </svg>
);

export const BrainIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pulse', className)}>
    <path d="M12 4a4 4 0 0 0-4 4 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 4 2 3 3 0 0 0 4-2 3 3 0 0 0 2-5 3 3 0 0 0-2-5 4 4 0 0 0-4-4z"
          fill="var(--color-primary-50)" stroke="var(--color-primary)" strokeWidth="1.6" />
    <path d="M12 4v16M9 9c.5-1 2-1 3 0M12 13c1-1 2.5-1 3 0" stroke="var(--color-primary)"
          strokeWidth="1.4" strokeLinecap="round" fill="none" />
  </svg>
);

export const MedicalCrossIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pulse', className)}>
    <circle cx="12" cy="12" r="10" fill="var(--color-primary)" />
    <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const HospitalIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'float', className)}>
    <path d="M4 21V8l8-5 8 5v13z" fill="var(--color-primary-50)"
          stroke="var(--color-primary)" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 12v5M9.5 14.5h5" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" />
    <rect x="9" y="18" width="6" height="3" fill="var(--color-primary)" />
  </svg>
);

/* ───────────────────────── ui & action ────────────────────────────── */

export const CalendarIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <rect x="3" y="5" width="18" height="16" rx="2"
          fill="#fff" stroke="var(--color-primary)" strokeWidth="1.8" />
    <rect x="3" y="5" width="18" height="5" rx="2" fill="var(--color-primary)" />
    <rect x="7" y="3" width="2" height="4" rx="1" fill="#0F172A" />
    <rect x="15" y="3" width="2" height="4" rx="1" fill="#0F172A" />
    <rect x="9" y="13" width="6" height="5" rx="1" fill="#10B981" className="icon-cal-tick" />
    <path d="M10.5 15.5l1 1 2-2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <circle cx="12" cy="12" r="9" fill="#fff" stroke="var(--color-primary)" strokeWidth="1.8" />
    <line x1="12" y1="12" x2="12" y2="7"  stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="12" x2="15" y2="13" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="12" r="0.9" fill="#F59E0B" />
  </svg>
);

export const PinIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'drop', className)}>
    <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"
          fill="var(--color-primary)" />
    <circle cx="12" cy="9" r="2.6" fill="#fff" />
  </svg>
);

export const GlobeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'spin', className)}>
    <circle cx="12" cy="12" r="9" fill="var(--color-primary-50)"
            stroke="var(--color-primary)" strokeWidth="1.8" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M5 7c4 1 10 1 14 0M5 17c4-1 10-1 14 0"
          stroke="var(--color-primary)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

export const LaptopIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'float', className)}>
    <rect x="4" y="5" width="16" height="11" rx="2" fill="var(--color-primary-50)"
          stroke="var(--color-primary)" strokeWidth="1.8" />
    <rect x="6" y="7" width="12" height="7" rx="1" fill="#fff" />
    <path d="M2 19h20l-1 2H3z" fill="var(--color-primary)" />
    <circle cx="12" cy="10.5" r="1.5" fill="#10B981" className="icon-cal-tick" />
  </svg>
);

export const ShieldIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pulse', className)}>
    <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"
          fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="1.4" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="#fff"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LockIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <rect x="4" y="11" width="16" height="10" rx="2"
          fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="1.4" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="var(--color-primary)"
          strokeWidth="1.8" fill="none" />
    <circle cx="12" cy="16" r="1.4" fill="#fff" />
  </svg>
);

export const CardIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'flipx', className)}>
    <rect x="2.5" y="6" width="19" height="13" rx="2"
          fill="var(--color-primary)" />
    <rect x="2.5" y="9" width="19" height="2.5" fill="#0F172A" opacity="0.4" />
    <rect x="5"   y="14" width="3" height="2" rx="0.5" fill="#FBBF24" />
    <rect x="10"  y="14" width="9" height="1.5" rx="0.5" fill="#fff" opacity="0.7" />
  </svg>
);

export const ClipboardIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <rect x="5" y="4" width="14" height="17" rx="2" fill="#fff"
          stroke="var(--color-primary)" strokeWidth="1.8" />
    <rect x="9" y="2" width="6" height="4" rx="1.5" fill="var(--color-primary)" />
    <path d="M8 11h8M8 15h6" stroke="var(--color-primary)" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="8" cy="11" r="0.6" fill="#10B981" />
    <circle cx="8" cy="15" r="0.6" fill="#10B981" />
  </svg>
);

/* ───────────────────────── decorative / status ────────────────────── */

export const StarIcon = ({ size = 22, className, animate = true, color }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'twinkle', className)}>
    <path d="M12 2l2.95 6.6 7.05.7-5.3 4.85L18.3 21 12 17.4 5.7 21l1.6-6.85L2 9.3l7.05-.7z"
          fill={color ?? '#F59E0B'}
          stroke={color ?? '#F59E0B'} strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

export const SparkleIcon = ({ size = 22, className, animate = true, color }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'twinkle', className)}>
    <path d="M12 3l1.5 6 6 1.5-6 1.5L12 18l-1.5-6-6-1.5 6-1.5z"
          fill={color ?? '#F59E0B'} />
    <circle cx="19" cy="5" r="1" fill={color ?? '#10B981'} />
    <circle cx="5" cy="19" r="1" fill={color ?? '#10B981'} />
  </svg>
);

export const LightningIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'flash', className)}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="#FBBF24" stroke="#F59E0B"
          strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const LightbulbIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'glow', className)}>
    <path d="M9 18h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" fill="var(--color-primary)" />
    <path d="M12 3a6 6 0 0 0-4 10.5c1 1 1.5 2 1.5 3.5h5c0-1.5.5-2.5 1.5-3.5A6 6 0 0 0 12 3z"
          fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.4" />
  </svg>
);

export const CheckIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <circle cx="12" cy="12" r="10" fill="#10B981" />
    <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BadgeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <circle cx="12" cy="9" r="6" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.6" />
    <path d="M9 13l-3 8 6-3 6 3-3-8" stroke="#F59E0B" strokeWidth="1.6"
          fill="#FBBF24" strokeLinejoin="round" />
    <text x="12" y="11" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff">★</text>
  </svg>
);

/* ───────────────────────── lifestyle / nature ─────────────────────── */

export const LeafIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <path d="M5 19c0-9 7-15 16-15-1 9-7 15-16 15z"
          fill="#10B981" stroke="#059669" strokeWidth="1.4" />
    <path d="M5 19c4-4 8-8 16-15" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" />
  </svg>
);

export const SproutIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'sway', className)}>
    <path d="M12 21V11" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 11C8 11 5 9 5 5c4 0 7 2 7 6z" fill="#10B981" />
    <path d="M12 11c4 0 7-2 7-6-4 0-7 2-7 6z" fill="#34D399" />
  </svg>
);

export const FlowerIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'spin-slow', className)}>
    <circle cx="12" cy="12" r="2.5" fill="#FBBF24" />
    <ellipse cx="12" cy="6"  rx="2.5" ry="3.5" fill="#F472B6" />
    <ellipse cx="12" cy="18" rx="2.5" ry="3.5" fill="#F472B6" />
    <ellipse cx="6"  cy="12" rx="3.5" ry="2.5" fill="#F472B6" />
    <ellipse cx="18" cy="12" rx="3.5" ry="2.5" fill="#F472B6" />
  </svg>
);

export const DropIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'drop', className)}>
    <path d="M12 3c-3 5-6 9-6 12a6 6 0 0 0 12 0c0-3-3-7-6-12z"
          fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="1.4" />
    <ellipse cx="9.5" cy="13" rx="1.5" ry="2.5" fill="#fff" opacity="0.5" />
  </svg>
);

/* ───────────────────────── people / care ──────────────────────────── */

export const HandshakeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <path d="M2 12l5-2 4 4M22 12l-5-2-4 4" stroke="var(--color-primary)"
          strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="9" y="11" width="6" height="5" rx="1.5" fill="#F59E0B" />
    <path d="M2 12l3 5h2M22 12l-3 5h-2" stroke="#10B981"
          strokeWidth="1.8" fill="none" strokeLinecap="round" />
  </svg>
);

export const ArmStrengthIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <path d="M4 11h6v3a4 4 0 0 1-4 4H3v-4a3 3 0 0 1 1-3z M10 4c4 0 9 3 9 9v2H10v-3a4 4 0 0 1 0-8z"
          fill="var(--color-primary)" />
    <circle cx="13.5" cy="9" r="1.6" fill="#fff" opacity="0.8" />
  </svg>
);

export const AwardIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <circle cx="12" cy="9" r="6" fill="var(--color-primary)" />
    <circle cx="12" cy="9" r="3" fill="#FBBF24" />
    <path d="M8 14l-2 7 6-3 6 3-2-7" fill="var(--color-primary)" />
  </svg>
);

/* ───────────────────────── alerts ──────────────────────────────────── */

export const AlertIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pulse', className)}>
    <path d="M12 3l9.5 17h-19z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.6" strokeLinejoin="round" />
    <line x1="12" y1="10" x2="12" y2="14" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17" r="0.9" fill="#B45309" />
  </svg>
);

export const RefreshIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'spin', className)}>
    <path d="M3 12a9 9 0 0 1 16-5l2-2v6h-6l2-2a6 6 0 0 0-10 3"
          stroke="var(--color-primary)" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    <path d="M21 12a9 9 0 0 1-16 5l-2 2v-6h6l-2 2a6 6 0 0 0 10-3"
          stroke="#10B981" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
  </svg>
);

export const ChartIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'pop', className)}>
    <rect x="3" y="13" width="4" height="8" rx="1" fill="var(--color-primary)" />
    <rect x="10" y="9"  width="4" height="12" rx="1" fill="#10B981" />
    <rect x="17" y="5"  width="4" height="16" rx="1" fill="#FBBF24" />
  </svg>
);

export const HomeIcon = ({ size = 22, className, animate = true }: IconProps) => (
  <svg {...baseSvgProps(size)} className={cls(animate, 'float', className)}>
    <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"
          fill="var(--color-primary-50)" stroke="var(--color-primary)" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 21v-7h6v7" stroke="var(--color-primary)" strokeWidth="1.6" fill="#fff" />
  </svg>
);

/* ───────────────────────── small status dot (used in eyebrow/badge) ─ */

export const StatusDot = ({ size = 8, color = '#10B981', className }: IconProps) => (
  <span
    aria-hidden="true"
    className={['icon-pulse-dot', className].filter(Boolean).join(' ')}
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      verticalAlign: 'middle',
    }}
  />
);
