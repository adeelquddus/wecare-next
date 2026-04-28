'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CLINIC, SERVICES, SERVICE_IMAGES } from '@/lib/clinic';
import styles from './Header.module.css';

/* ─── Services dropdown - sourced directly from lib/clinic so it always
       stays in sync with the SERVICES array. ──────────────────────────── */
const SERVICES_DROPDOWN = SERVICES.map((s) => ({
  label: s.name,
  href:  s.url,
  desc:  s.tagline,
  icon:  s.icon,
  slug:  s.slug,
}));

/* ─── Main nav items ───────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'Home',         href: '/' },
  { label: 'Services',     href: '/services', hasDropdown: true },
  { label: 'About Us',     href: '/about' },
  { label: 'New Patients', href: '/new-patients' },
  { label: 'Health Blog',  href: '/blog' },
  { label: 'FAQ',          href: '/faq' },
  { label: 'Contact',      href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen]           = useState(false);
  const [dropOpen, setDropOpen]           = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const dropRef      = useRef<HTMLLIElement>(null);
  const closeTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrop  = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isServicesActive = pathname.startsWith('/services')
    || SERVICES_DROPDOWN.some(s => pathname === s.href);

  return (
    <div className={styles.headerWrap} role="banner">

      {/* ── Announcement bar ─────────────────────────────────────────── */}
      {bannerVisible && (
        <div className={styles.banner}>
          <p className={styles.bannerText}>
            <img src="/favi-white-wecare-wellness.svg" alt="" aria-hidden="true" className={styles.bannerIcon} />
            Now accepting new patients - same-week appointments available!{' '}
            <a href="/booking" className={styles.bannerLink}>
              Book today →
            </a>
          </p>
          <button
            className={styles.bannerClose}
            aria-label="Dismiss announcement"
            onClick={() => setBannerVisible(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Main navbar ──────────────────────────────────────────────── */}
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>

          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="WeCare Wellness Clinic - home">
            <Image
              src="/logo.png"
              alt="WeCare Wellness Clinic"
              width={220}
              height={64}
              priority
              className={styles.logoImg}
            />
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList} role="list">
              {NAV_ITEMS.map((item) => {

                /* Services item with dropdown */
                if (item.hasDropdown) {
                  return (
                    <li
                      key={item.href}
                      ref={dropRef}
                      className={styles.dropItem}
                      onMouseEnter={openDrop}
                      onMouseLeave={closeDrop}
                    >
                      <button
                        className={`${styles.navLink} ${isServicesActive ? styles.active : ''} ${styles.dropTrigger}`}
                        aria-haspopup="true"
                        aria-expanded={dropOpen}
                        onClick={() => setDropOpen(v => !v)}
                      >
                        {item.label}
                        <svg
                          className={`${styles.chevron} ${dropOpen ? styles.chevronOpen : ''}`}
                          width="14" height="14" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>

                      {/* Dropdown panel - transparent wrapper starts at li bottom,
                          padding-top creates the visual gap without a hover dead-zone */}
                      <div
                        className={`${styles.dropdown} ${dropOpen ? styles.dropdownOpen : ''}`}
                        role="menu"
                        aria-label="Services menu"
                        onMouseEnter={openDrop}
                        onMouseLeave={closeDrop}
                      >
                        {/* Visible card lives inside .dropInner */}
                        <div className={styles.dropInner}>
                          {/* All services link at top */}
                          <Link href="/services" className={styles.dropAllLink} role="menuitem">
                            <span className={styles.dropAllLabel}>All services</span>
                            <span className={styles.dropAllArrow}>→</span>
                          </Link>

                          <div className={styles.dropDivider} aria-hidden="true" />

                          <ul className={styles.dropList} role="list">
                            {SERVICES_DROPDOWN.map((s) => (
                              <li key={s.href} role="none">
                                <Link
                                  href={s.href}
                                  className={`${styles.dropLink} ${pathname === s.href ? styles.dropLinkActive : ''}`}
                                  role="menuitem"
                                >
                                  <span className={styles.dropIcon} aria-hidden="true">
                                    {SERVICE_IMAGES[s.slug] ? (
                                      <Image
                                        src={SERVICE_IMAGES[s.slug]}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className={styles.dropIconImg}
                                      />
                                    ) : s.icon}
                                  </span>
                                  <span className={styles.dropContent}>
                                    <span className={styles.dropLabel}>{s.label}</span>
                                    <span className={styles.dropDesc}>{s.desc}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                }

                /* Regular nav item */
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: phone + CTA + hamburger */}
          <div className={styles.navRight}>
            <a href={`tel:${CLINIC.phone}`} className={styles.phoneLink} aria-label={`Call ${CLINIC.phoneDisplay}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12.6 19.79 19.79 0 0 1 1.07 4A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {CLINIC.phoneDisplay}
            </a>

            <Link href="/booking" className={styles.bookBtn} aria-label="Book an appointment">
              Book an Appointment
            </Link>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ──────────────────────────────────────────────── */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileList} role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              {item.hasDropdown ? (
                <>
                  <Link
                    href="/services"
                    className={`${styles.mobileLink} ${isServicesActive ? styles.active : ''}`}
                  >
                    Services
                  </Link>
                  <ul className={styles.mobileSubList} role="list">
                    {SERVICES_DROPDOWN.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className={`${styles.mobileSubLink} ${pathname === s.href ? styles.active : ''}`}
                        >
                          <span aria-hidden="true" className={styles.mobileSubIcon}>
                            {SERVICE_IMAGES[s.slug] ? (
                              <Image
                                src={SERVICE_IMAGES[s.slug]}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.mobileSubIconImg}
                              />
                            ) : s.icon}
                          </span>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.mobileLink} ${pathname === item.href ? styles.active : ''}`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          <li className={styles.mobileCta}>
            <Link href="/booking" className={styles.mobileBookBtn}>
              Book an Appointment
            </Link>
            <a href={`tel:${CLINIC.phone}`} className={styles.mobilePhone}>
              {CLINIC.phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
