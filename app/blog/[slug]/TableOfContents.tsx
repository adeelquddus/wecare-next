'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TableOfContents.module.css';

interface Heading {
  id: string;
  text: string;
  level: number; // 2 | 3
}

interface Props {
  contentHtml: string;
}

/**
 * Extracts h2/h3 headings from rendered HTML, injects IDs, and renders a
 * sticky TOC with IntersectionObserver-based scroll spy.
 */
export default function TableOfContents({ contentHtml }: Props) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [open, setOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ── Extract headings from the DOM after mount ── */
  useEffect(() => {
    const body = document.querySelector('[data-blog-body]');
    if (!body) return;

    const els = Array.from(body.querySelectorAll('h2, h3')) as HTMLHeadingElement[];
    const extracted: Heading[] = [];

    els.forEach((el, i) => {
      const level = el.tagName === 'H2' ? 2 : 3;
      const slug = el.id || `heading-${i}-${el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') ?? i}`;
      if (!el.id) el.id = slug;
      extracted.push({ id: slug, text: el.textContent ?? '', level });
    });

    setHeadings(extracted);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentHtml]);

  /* ── Scroll spy via IntersectionObserver ── */
  useEffect(() => {
    if (!headings.length) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-72px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      {/* Mobile toggle */}
      <button
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="toc-list"
      >
        <span className={styles.toggleLabel}>Contents</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>

      <ol
        id="toc-list"
        className={`${styles.list} ${open ? styles.listOpen : ''}`}
      >
        {headings.map(({ id, text, level }) => (
          <li key={id} className={`${styles.item} ${level === 3 ? styles.itemNested : ''}`}>
            <a
              href={`#${id}`}
              className={`${styles.link} ${activeId === id ? styles.linkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
