/**
 * 2D vector illustration set for WeCare Wellness.
 * Each illustration is a self-contained SVG React component, ~100x100 viewBox,
 * tuned to the brand palette (primary blue, mint, amber accents). They scale
 * cleanly via CSS width/height. No external assets — pure inline SVG.
 */

import React from 'react';

interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const baseProps = (size: number | string = 96, props: IllustrationProps) => ({
  width: size,
  height: size,
  viewBox: '0 0 120 120',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  role: 'img',
  ...props,
});

/* ── Step 1 — Calendar with checkmark (Book appointment) ─────────────── */
export const CalendarBookIllustration = ({ size = 96, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    {/* Soft halo */}
    <circle cx="60" cy="60" r="54" fill="#E0F2FE" />
    {/* Calendar body */}
    <rect x="24" y="32" width="72" height="64" rx="10" fill="#fff" stroke="#0086C5" strokeWidth="2.5" />
    {/* Top header */}
    <rect x="24" y="32" width="72" height="16" rx="10" fill="#0086C5" />
    {/* Rings */}
    <rect x="38" y="22" width="6" height="18" rx="3" fill="#0F172A" />
    <rect x="76" y="22" width="6" height="18" rx="3" fill="#0F172A" />
    {/* Date squares */}
    <rect x="32" y="56" width="12" height="10" rx="2" fill="#E2E8F0" />
    <rect x="48" y="56" width="12" height="10" rx="2" fill="#E2E8F0" />
    <rect x="64" y="56" width="12" height="10" rx="2" fill="#E2E8F0" />
    <rect x="80" y="56" width="8" height="10" rx="2" fill="#E2E8F0" />
    <rect x="32" y="70" width="12" height="10" rx="2" fill="#E2E8F0" />
    {/* Highlighted date */}
    <rect x="48" y="70" width="12" height="10" rx="2" fill="#10B981" />
    <path d="M51 75l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="64" y="70" width="12" height="10" rx="2" fill="#E2E8F0" />
    <rect x="80" y="70" width="8" height="10" rx="2" fill="#E2E8F0" />
    {/* Sparkle */}
    <path d="M98 28l3-7 3 7 7 3-7 3-3 7-3-7-7-3z" fill="#F59E0B" />
  </svg>
);

/* ── Step 2 — ID + clipboard (Documents) ─────────────────────────────── */
export const DocumentsIllustration = ({ size = 96, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    <circle cx="60" cy="60" r="54" fill="#FEF3C7" />
    {/* Clipboard */}
    <rect x="28" y="22" width="56" height="80" rx="6" fill="#fff" stroke="#0F172A" strokeWidth="2" />
    <rect x="44" y="18" width="24" height="10" rx="3" fill="#0086C5" />
    {/* Lines */}
    <rect x="36" y="38" width="32" height="3" rx="1.5" fill="#94A3B8" />
    <rect x="36" y="46" width="40" height="3" rx="1.5" fill="#CBD5E1" />
    {/* ID Card */}
    <rect x="36" y="58" width="44" height="32" rx="4" fill="#10B981" />
    <circle cx="46" cy="72" r="6" fill="#fff" />
    <rect x="56" y="66" width="20" height="4" rx="1.5" fill="#fff" opacity="0.9" />
    <rect x="56" y="74" width="14" height="3" rx="1.5" fill="#fff" opacity="0.7" />
    <rect x="56" y="80" width="18" height="3" rx="1.5" fill="#fff" opacity="0.7" />
    {/* Pencil */}
    <path d="M86 92l8-8 6 6-8 8z" fill="#F59E0B" />
    <path d="M86 92l-2 6 6-2z" fill="#0F172A" />
  </svg>
);

/* ── Step 3 — Clock (Arrive early) ───────────────────────────────────── */
export const ClockIllustration = ({ size = 96, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    <circle cx="60" cy="60" r="54" fill="#DBEAFE" />
    {/* Clock body */}
    <circle cx="60" cy="60" r="36" fill="#fff" stroke="#0086C5" strokeWidth="3" />
    {/* Hour ticks */}
    <rect x="58.5" y="28" width="3" height="6" rx="1.5" fill="#0F172A" />
    <rect x="58.5" y="86" width="3" height="6" rx="1.5" fill="#0F172A" />
    <rect x="28" y="58.5" width="6" height="3" rx="1.5" fill="#0F172A" />
    <rect x="86" y="58.5" width="6" height="3" rx="1.5" fill="#0F172A" />
    {/* Hands — pointing at 9:45 (arriving early!) */}
    <line x1="60" y1="60" x2="60" y2="38" stroke="#0086C5" strokeWidth="3" strokeLinecap="round" />
    <line x1="60" y1="60" x2="42" y2="60" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="60" cy="60" r="3" fill="#F59E0B" />
    {/* Bell */}
    <path d="M86 24l4-4M94 32l4-4M86 32l4 4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ── Step 4 — Stethoscope + heart (Meet provider) ────────────────────── */
export const StethoscopeIllustration = ({ size = 96, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    <circle cx="60" cy="60" r="54" fill="#D1FAE5" />
    {/* Stethoscope tubing */}
    <path d="M40 32v22a18 18 0 0 0 36 0V32" stroke="#0086C5" strokeWidth="4" fill="none" strokeLinecap="round" />
    <circle cx="40" cy="30" r="5" fill="#0086C5" />
    <circle cx="76" cy="30" r="5" fill="#0086C5" />
    {/* Drop tube */}
    <path d="M58 76v8a8 8 0 0 0 16 0V72" stroke="#0086C5" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Bell */}
    <circle cx="74" cy="68" r="9" fill="#fff" stroke="#0086C5" strokeWidth="3" />
    <circle cx="74" cy="68" r="3" fill="#0086C5" />
    {/* Heart on the chest */}
    <path d="M44 80c-6-4-10-9-10-14a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 5-4 10-10 14l-3 2z" fill="#EF4444" transform="translate(-3 0)" />
  </svg>
);

/* ── Why card 1 — Same-week calendar ─────────────────────────────────── */
export const SameWeekIllustration = ({ size = 80, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    <rect x="14" y="18" width="92" height="86" rx="10" fill="#0086C5" />
    <rect x="14" y="18" width="92" height="22" rx="10" fill="#0F172A" opacity="0.15" />
    <circle cx="32" cy="14" r="4" fill="#0F172A" />
    <circle cx="88" cy="14" r="4" fill="#0F172A" />
    {/* Mini week dots */}
    {[24, 38, 52, 66, 80, 94].map((x, i) => (
      <circle key={i} cx={x} cy="60" r="5" fill={i === 2 ? '#F59E0B' : 'rgba(255,255,255,0.4)'} />
    ))}
    {/* Lightning bolt */}
    <path d="M58 70l8-12-4 0 4-12 12 14h-6l4 14z" fill="#FBBF24" />
  </svg>
);

/* ── Why card 2 — Multi-services cluster ─────────────────────────────── */
export const ServicesClusterIllustration = ({ size = 80, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    {/* Center circle */}
    <circle cx="60" cy="60" r="20" fill="#0086C5" />
    <path d="M60 50v20M50 60h20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    {/* Orbiting service dots */}
    <circle cx="60" cy="22" r="10" fill="#10B981" />
    <circle cx="92" cy="40" r="9" fill="#F59E0B" />
    <circle cx="92" cy="80" r="9" fill="#EF4444" />
    <circle cx="60" cy="98" r="10" fill="#8B5CF6" />
    <circle cx="28" cy="80" r="9" fill="#EC4899" />
    <circle cx="28" cy="40" r="9" fill="#06B6D4" />
    {/* Connector lines */}
    <line x1="60" y1="32" x2="60" y2="40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="84" y1="44" x2="76" y2="50" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="84" y1="76" x2="76" y2="70" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="60" y1="88" x2="60" y2="80" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="36" y1="76" x2="44" y2="70" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="36" y1="44" x2="44" y2="50" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

/* ── Why card 3 — Saturday weekend ───────────────────────────────────── */
export const WeekendIllustration = ({ size = 80, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    <rect x="14" y="22" width="92" height="84" rx="10" fill="#fff" stroke="#0086C5" strokeWidth="2.5" />
    <rect x="14" y="22" width="92" height="20" rx="10" fill="#10B981" />
    <text x="60" y="36" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">SAT</text>
    {/* Highlighted Saturday cell */}
    <rect x="80" y="56" width="20" height="20" rx="4" fill="#F59E0B" />
    <text x="90" y="71" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">9</text>
    {/* Other dim cells */}
    {[
      [22, 56], [42, 56], [62, 56],
      [22, 80], [42, 80], [62, 80], [82, 80],
    ].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="16" height="16" rx="3" fill="#E2E8F0" />
    ))}
    {/* Sun rays */}
    <circle cx="98" cy="20" r="5" fill="#FBBF24" />
    <line x1="98" y1="8" x2="98" y2="12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
    <line x1="110" y1="20" x2="106" y2="20" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
    <line x1="89" y1="11" x2="92" y2="14" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ── Why card 4 — Telehealth video ───────────────────────────────────── */
export const TelehealthIllustration = ({ size = 80, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    {/* Laptop */}
    <rect x="18" y="32" width="84" height="58" rx="6" fill="#0F172A" />
    <rect x="22" y="36" width="76" height="46" rx="3" fill="#fff" />
    <rect x="14" y="90" width="92" height="6" rx="3" fill="#94A3B8" />
    {/* Doctor avatar in screen */}
    <circle cx="42" cy="56" r="10" fill="#10B981" />
    <circle cx="42" cy="52" r="4" fill="#fff" />
    <path d="M34 64c1-4 4-6 8-6s7 2 8 6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Stethoscope cross */}
    <path d="M68 50h16M76 42v16" stroke="#0086C5" strokeWidth="3" strokeLinecap="round" />
    <circle cx="76" cy="74" r="3" fill="#EF4444" />
    {/* Video pulse */}
    <circle cx="92" cy="22" r="5" fill="#EF4444" />
    <circle cx="92" cy="22" r="9" fill="none" stroke="#EF4444" strokeWidth="2" opacity="0.5" />
  </svg>
);

/* ── Why card 5 — Insurance card ─────────────────────────────────────── */
export const InsuranceCardIllustration = ({ size = 80, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    {/* Card back */}
    <rect x="14" y="36" width="84" height="52" rx="6" fill="#10B981" transform="rotate(-6 56 62)" />
    {/* Card front */}
    <rect x="22" y="32" width="84" height="52" rx="6" fill="#0086C5" />
    {/* Magnetic stripe */}
    <rect x="22" y="42" width="84" height="8" fill="#0F172A" />
    {/* Chip */}
    <rect x="32" y="58" width="14" height="10" rx="2" fill="#FBBF24" />
    {/* Number lines */}
    <rect x="50" y="60" width="14" height="3" rx="1.5" fill="#fff" opacity="0.7" />
    <rect x="68" y="60" width="14" height="3" rx="1.5" fill="#fff" opacity="0.7" />
    <rect x="86" y="60" width="14" height="3" rx="1.5" fill="#fff" opacity="0.7" />
    <rect x="50" y="70" width="36" height="3" rx="1.5" fill="#fff" opacity="0.5" />
    {/* Plus medical cross */}
    <circle cx="92" cy="76" r="8" fill="#fff" />
    <path d="M92 70v12M86 76h12" stroke="#0086C5" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ── Why card 6 — Handshake / care ───────────────────────────────────── */
export const CareHandshakeIllustration = ({ size = 80, ...rest }: IllustrationProps) => (
  <svg {...baseProps(size, rest)}>
    {/* Heart bg */}
    <path d="M60 96c-22-12-36-26-36-44a16 16 0 0 1 30-7 16 16 0 0 1 30 7c0 18-14 32-36 44z"
          fill="#FEE2E2" />
    {/* Two hands */}
    <path d="M28 60c0-3 2-6 6-6h14c4 0 6 2 6 5v6h-26c-0-2 0-3 0-5z" fill="#0086C5" />
    <path d="M92 60c0-3-2-6-6-6H72c-4 0-6 2-6 5v6h26v-5z" fill="#10B981" />
    {/* Thumb fingers meeting */}
    <rect x="50" y="56" width="20" height="14" rx="4" fill="#F59E0B" />
    {/* Sparkles */}
    <path d="M30 36l1.5-3 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5z" fill="#F59E0B" />
    <path d="M88 38l1-2 1 2 2 1-2 1-1 2-1-2-2-1z" fill="#10B981" />
  </svg>
);

/* ── Small line icons for "What to bring" ─────────────────────────────── */
const smallProps = (size: number | string = 22) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
});

export const IdIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...smallProps(size)}>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0086C5" strokeWidth="1.8" />
    <circle cx="8" cy="12" r="2.5" fill="#0086C5" />
    <line x1="13" y1="10" x2="19" y2="10" stroke="#0086C5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="13" y1="14" x2="17" y2="14" stroke="#0086C5" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const PillsIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...smallProps(size)}>
    <rect x="3" y="9" width="18" height="6" rx="3" stroke="#0086C5" strokeWidth="1.8" />
    <line x1="12" y1="9" x2="12" y2="15" stroke="#0086C5" strokeWidth="1.8" />
    <circle cx="6" cy="6" r="2" fill="#10B981" />
    <circle cx="18" cy="18" r="2" fill="#F59E0B" />
  </svg>
);

export const PaperIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...smallProps(size)}>
    <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="#0086C5" strokeWidth="1.8" />
    <path d="M14 3v6h6" stroke="#0086C5" strokeWidth="1.8" />
    <line x1="8" y1="14" x2="16" y2="14" stroke="#0086C5" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="8" y1="17" x2="13" y2="17" stroke="#0086C5" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const AlertIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...smallProps(size)}>
    <path d="M12 3l9 16H3z" stroke="#F59E0B" strokeWidth="1.8" strokeLinejoin="round" fill="#FEF3C7" />
    <line x1="12" y1="10" x2="12" y2="14" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17" r="0.9" fill="#F59E0B" />
  </svg>
);

export const PhoneIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...smallProps(size)}>
    <path d="M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
          stroke="#10B981" strokeWidth="1.8" strokeLinejoin="round" fill="#D1FAE5" />
  </svg>
);

export const LetterIcon = ({ size = 22 }: { size?: number }) => (
  <svg {...smallProps(size)}>
    <rect x="3" y="6" width="18" height="13" rx="2" stroke="#0086C5" strokeWidth="1.8" />
    <path d="M3 8l9 6 9-6" stroke="#0086C5" strokeWidth="1.8" />
  </svg>
);

/* ── Large hero illustration: clipboard + stethoscope + heart ─────────── */
export const NewPatientHeroIllustration = ({ size = 380, ...rest }: IllustrationProps) => (
  <svg width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    {/* BG blob */}
    <path d="M200 40c80 0 140 60 140 150s-60 170-150 170S50 290 50 200 120 40 200 40z" fill="#E0F2FE" />
    <circle cx="320" cy="80" r="20" fill="#FEF3C7" />
    <circle cx="80" cy="320" r="14" fill="#D1FAE5" />
    <path d="M340 280l4-10 4 10 10 4-10 4-4 10-4-10-10-4z" fill="#F59E0B" />

    {/* Clipboard */}
    <rect x="120" y="100" width="160" height="220" rx="14" fill="#fff" stroke="#0F172A" strokeWidth="3" />
    <rect x="170" y="86" width="60" height="22" rx="5" fill="#0086C5" />
    {/* Lines */}
    <rect x="140" y="140" width="80" height="6" rx="3" fill="#CBD5E1" />
    <rect x="140" y="156" width="120" height="6" rx="3" fill="#E2E8F0" />
    <rect x="140" y="172" width="100" height="6" rx="3" fill="#E2E8F0" />

    {/* ID card */}
    <rect x="140" y="200" width="120" height="90" rx="8" fill="#10B981" />
    <circle cx="170" cy="232" r="14" fill="#fff" />
    <circle cx="170" cy="228" r="5" fill="#10B981" />
    <path d="M158 244c2-7 7-10 12-10s10 3 12 10" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
    <rect x="194" y="218" width="56" height="6" rx="3" fill="#fff" opacity="0.95" />
    <rect x="194" y="232" width="40" height="5" rx="2.5" fill="#fff" opacity="0.7" />
    <rect x="194" y="244" width="46" height="5" rx="2.5" fill="#fff" opacity="0.7" />
    <rect x="194" y="262" width="56" height="5" rx="2.5" fill="#fff" opacity="0.6" />

    {/* Stethoscope draped */}
    <path d="M280 96c20 12 30 30 24 56-4 18-16 30-30 36" stroke="#0086C5" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="280" cy="96" r="8" fill="#0086C5" />
    <circle cx="276" cy="190" r="14" fill="#fff" stroke="#0086C5" strokeWidth="6" />
    <circle cx="276" cy="190" r="5" fill="#0086C5" />

    {/* Floating heart */}
    <g transform="translate(60 140)">
      <path d="M30 50C12 38 0 28 0 14A12 12 0 0 1 22 8 12 12 0 0 1 44 8C44 22 32 32 14 44z"
            fill="#EF4444" transform="translate(2 2) scale(0.85)" />
      <path d="M30 50C12 38 0 28 0 14A12 12 0 0 1 22 8 12 12 0 0 1 44 8C44 22 32 32 14 44z"
            fill="#FCA5A5" />
    </g>

    {/* Pencil */}
    <g transform="translate(294 296) rotate(-30)">
      <rect x="0" y="0" width="60" height="12" rx="2" fill="#FBBF24" />
      <polygon points="60,0 70,6 60,12" fill="#0F172A" />
      <rect x="0" y="0" width="14" height="12" fill="#10B981" />
    </g>
  </svg>
);
