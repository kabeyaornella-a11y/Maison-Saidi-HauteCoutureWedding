import { useEffect, useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './BibleVerse.module.css';

export function BibleVerse({ verseIndex = 0 }: { verseIndex?: number }) {
  const { invitationConfig, mediaConfig } = useClient();
  const verse = invitationConfig.verses[verseIndex] ?? invitationConfig.verses[0];
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
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      label="Citation biblique"
      className={styles.root}
      style={{ '--verse-bg': `url(${mediaConfig.verses.first})` } as React.CSSProperties}
    >
      <div ref={rootRef} className={`${styles.stage} ${isInView ? styles.inView : ''}`}>
        <Container>
          <blockquote className={styles.quote}>
            <p className={styles.text}>
              <span className={styles.textInk}>« {verse.text} »</span>
            </p>
            <cite className={styles.reference}>{verse.reference}</cite>
          </blockquote>
        </Container>
      </div>
    </Section>
  );
}
