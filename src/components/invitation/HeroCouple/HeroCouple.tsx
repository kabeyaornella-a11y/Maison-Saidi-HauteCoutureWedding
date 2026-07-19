import { useEffect, useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './HeroCouple.module.css';

// Positions déterministes (pas de random à chaque rendu) pour les particules/étoiles.
const SPARKLES = [
  { x: 3, delay: 0, duration: 16.5, size: 5, kind: 'star' },
  { x: 9, delay: 1.4, duration: 17.5, size: 3, kind: 'dot' },
  { x: 15, delay: 3.1, duration: 16, size: 4, kind: 'dot' },
  { x: 21, delay: 5.8, duration: 18, size: 3, kind: 'dot' },
  { x: 27, delay: 0.6, duration: 18, size: 6, kind: 'star' },
  { x: 33, delay: 2.2, duration: 16.8, size: 3, kind: 'dot' },
  { x: 39, delay: 4.4, duration: 17.2, size: 4, kind: 'dot' },
  { x: 45, delay: 4, duration: 17, size: 5, kind: 'star' },
  { x: 51, delay: 6.6, duration: 16.4, size: 3, kind: 'dot' },
  { x: 57, delay: 1, duration: 16.2, size: 3, kind: 'dot' },
  { x: 62, delay: 3.4, duration: 17.6, size: 4, kind: 'dot' },
  { x: 67, delay: 3.6, duration: 17.8, size: 4, kind: 'dot' },
  { x: 72, delay: 7.2, duration: 16.6, size: 3, kind: 'dot' },
  { x: 77, delay: 0.3, duration: 16.6, size: 6, kind: 'star' },
  { x: 82, delay: 2.8, duration: 17.2, size: 3, kind: 'dot' },
  { x: 87, delay: 5.2, duration: 18.4, size: 4, kind: 'dot' },
  { x: 92, delay: 1.8, duration: 16.4, size: 4, kind: 'star' },
  { x: 97, delay: 8.6, duration: 17.4, size: 3, kind: 'dot' },
  { x: 11, delay: 5, duration: 18.5, size: 3, kind: 'dot' },
  { x: 53, delay: 5.6, duration: 17.6, size: 5, kind: 'dot' },
  { x: 36, delay: 6.2, duration: 16.9, size: 3, kind: 'dot' },
  { x: 19, delay: 8, duration: 17.4, size: 3, kind: 'dot' },
  { x: 80, delay: 7.6, duration: 17, size: 3, kind: 'dot' },
  { x: 6, delay: 9.4, duration: 16.8, size: 4, kind: 'star' },
  { x: 30, delay: 10.2, duration: 17.9, size: 3, kind: 'dot' },
  { x: 47, delay: 9, duration: 18.2, size: 3, kind: 'dot' },
  { x: 64, delay: 10.8, duration: 17.1, size: 3, kind: 'dot' },
  { x: 95, delay: 9.8, duration: 16.7, size: 5, kind: 'star' },
] as const;

export function HeroCouple() {
  const { invitationConfig, mediaConfig } = useClient();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="hero" label={invitationConfig.couple.displayNames} className={styles.root}>
      <div
        ref={rootRef}
        className={`${styles.portraitFrame} ${isInView ? styles.inView : ''}`}
      >
        <img
          className={styles.photo}
          src={mediaConfig.hero.photo}
          alt={invitationConfig.couple.heroPhotoAlt}
          fetchPriority="high"
          draggable={false}
        />

        <div className={styles.photoShade} aria-hidden="true" />

        <div className={styles.sparkles} aria-hidden="true">
          {SPARKLES.map((s, i) => (
            <span
              key={i}
              className={s.kind === 'star' ? styles.star : styles.dot}
              style={
                {
                  left: `${s.x}%`,
                  width: `${s.size}px`,
                  height: `${s.size}px`,
                  animationDelay: `${s.delay}s`,
                  animationDuration: `${s.duration}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        <div className={styles.identity}>
          <h1 className={styles.names}>
            <span className={styles.namesInk}>{invitationConfig.couple.displayNames}</span>
          </h1>
          <div className={styles.goldRule} aria-hidden="true">
            <span className={styles.goldRuleHalf} />
            <span className={styles.goldRuleHalf} />
          </div>
          <p className={styles.tagline}>{invitationConfig.couple.heroTagline}</p>
        </div>
      </div>
    </Section>
  );
}
