import { useEffect, useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './HeroCouple.module.css';

// Positions déterministes (pas de random à chaque rendu) pour les particules/étoiles.
const SPARKLES = [
  { x: 5, delay: 0, duration: 11.5, size: 5, kind: 'star' },
  { x: 12, delay: 1.4, duration: 12.5, size: 3, kind: 'dot' },
  { x: 18, delay: 3.1, duration: 11, size: 4, kind: 'dot' },
  { x: 24, delay: 5.8, duration: 13, size: 3, kind: 'dot' },
  { x: 30, delay: 0.6, duration: 13, size: 6, kind: 'star' },
  { x: 36, delay: 2.2, duration: 11.8, size: 3, kind: 'dot' },
  { x: 42, delay: 4.4, duration: 12.2, size: 4, kind: 'dot' },
  { x: 48, delay: 4, duration: 12, size: 5, kind: 'star' },
  { x: 54, delay: 6.6, duration: 11.4, size: 3, kind: 'dot' },
  { x: 60, delay: 1, duration: 11.2, size: 3, kind: 'dot' },
  { x: 65, delay: 3.4, duration: 12.6, size: 4, kind: 'dot' },
  { x: 70, delay: 3.6, duration: 12.8, size: 4, kind: 'dot' },
  { x: 75, delay: 7.2, duration: 11.6, size: 3, kind: 'dot' },
  { x: 80, delay: 0.3, duration: 11.6, size: 6, kind: 'star' },
  { x: 85, delay: 2.8, duration: 12.2, size: 3, kind: 'dot' },
  { x: 90, delay: 5.2, duration: 13.4, size: 4, kind: 'dot' },
  { x: 95, delay: 1.8, duration: 11.4, size: 4, kind: 'star' },
  { x: 14, delay: 5, duration: 13.5, size: 3, kind: 'dot' },
  { x: 58, delay: 5.6, duration: 12.6, size: 5, kind: 'dot' },
  { x: 40, delay: 6.2, duration: 11.9, size: 3, kind: 'dot' },
  { x: 22, delay: 8, duration: 12.4, size: 3, kind: 'dot' },
  { x: 88, delay: 7.6, duration: 12, size: 3, kind: 'dot' },
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

        <div className={styles.veil} aria-hidden="true">
          <span className={styles.veilLayerA} />
          <span className={styles.veilLayerB} />
        </div>

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

        <div className={styles.silkTransition} aria-hidden="true" />

        <div className={styles.identity}>
          <h1 className={styles.names}>
            <span className={styles.namesInk}>{invitationConfig.couple.displayNames}</span>
          </h1>
          <p className={styles.tagline}>{invitationConfig.couple.heroTagline}</p>
        </div>
      </div>
    </Section>
  );
}
