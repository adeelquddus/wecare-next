'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CLINIC } from '@/lib/clinic';
import Button from '@/components/ui/Button';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Services',        href: '/services' },
  { label: 'Primary care',    href: '/primary-care' },
  { label: 'Weight loss',     href: '/medical-weight-loss' },
  { label: 'Telehealth',      href: '/telehealth' },
  { label: 'About us',        href: '/about' },
  { label: 'Insurance',       href: '/insurance' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Contact',         href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="WeCare Wellness Clinic — home">
          <span className={styles.logoIcon}>🌿</span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>WeCare</span>
            <span className={styles.logoSub}>Wellness</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + mobile toggle */}
        <div className={styles.actions}>
          <a href={`tel:${CLINIC.phone}`} className={styles.phoneLink}>
            {CLINIC.phoneDisplay}
          </a>
          <Button href="/booking" size="md" variant="primary" className={styles.bookBtn}>
            Book Appointment
          </Button>
          <button
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="/booking" fullWidth variant="primary" className={styles.mobileBook}>
              Book Appointment
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
