import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'li';
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  as: Tag = 'div',
}: CardProps) {
  const cls = [styles.card, styles[variant], styles[`pad-${padding}`], className]
    .filter(Boolean)
    .join(' ');

  return <Tag className={cls}>{children}</Tag>;
}
