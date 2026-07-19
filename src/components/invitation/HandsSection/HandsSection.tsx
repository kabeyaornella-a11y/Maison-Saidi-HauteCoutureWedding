import { useEffect, useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './HandsSection.module.css';

export function HandsSection() {
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
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section label="La promesse" className={styles.root}>
      <div ref={rootRef} className={isInView ? styles.inView : ''}>
        <img className={styles.photo} src={mediaConfig.hands.photo} alt={invitationConfig.hands.photoAlt} loading="lazy" />
        <span className={styles.kicker} aria-hidden="true">La promesse</span>
        <p>{invitationConfig.hands.caption}</p>
      </div>
    </Section>
  );
}
