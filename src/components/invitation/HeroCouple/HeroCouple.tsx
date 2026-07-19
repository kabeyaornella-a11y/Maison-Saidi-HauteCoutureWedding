import { useEffect, useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './HeroCouple.module.css';

// Positions déterministes (pas de random à chaque rendu) pour les particules/étoiles.
const SPARKLES = [
  { x: 8, delay: 0, duration: 7.5, size: 5, kind: 'star' },
  { x: 18, delay: 1.4, duration: 8.5, size: 3, kind: 'dot' },
  { x: 27, delay: 3.1, duration: 7, size: 4, kind: 'dot' },
  { x: 36, delay: 0.6, duration: 9, size: 6, kind: 'star' },
  { x: 45, delay: 2.2, duration: 7.8, size: 3, kind: 'dot' },
  { x: 53, delay: 4, duration: 8, size: 5, kind: 'star' },
  { x: 61, delay: 1, duration: 7.2, size: 3, kind: 'dot' },
  { x: 69, delay: 3.6, duration: 8.8, size: 4, kind: 'dot' },
  { x: 77, delay: 0.3, duration: 7.6, size: 6, kind: 'star' },
  { x: 85, delay: 2.8, duration: 8.2, size: 3, kind: 'dot' },
  { x: 93, delay: 1.8, duration: 7.4, size: 4, kind: 'star' },
  { x: 14, delay: 5, duration: 9.5, size: 3, kind: 'dot' },
  { x: 58, delay: 5.6, duration: 8.6, size: 5, kind: 'dot' },
  { x: 40, delay: 6.2, duration: 7.9, size: 3, kind: 'dot' },
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
