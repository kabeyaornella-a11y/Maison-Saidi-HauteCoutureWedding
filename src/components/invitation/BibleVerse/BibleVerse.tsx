import { useEffect, useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './BibleVerse.module.css';

const LINE_STAGGER_S = 1.6;
const LINE_DURATION_S = 2.6;

// Découpe la citation en 2 lignes pour l'animation "ligne par ligne" : au point-virgule
// s'il y en a un (coupure naturelle), sinon au milieu du nombre de mots.
function splitIntoLines(text: string): string[] {
  const semiIndex = text.indexOf(';');
  if (semiIndex !== -1) {
    return [text.slice(0, semiIndex + 1).trim(), text.slice(semiIndex + 1).trim()];
  }
  const words = text.split(' ');
  if (words.length < 4) return [text];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

export function BibleVerse({ verseIndex = 0 }: { verseIndex?: number }) {
  const { invitationConfig, mediaConfig } = useClient();
  const verse = invitationConfig.verses[verseIndex] ?? invitationConfig.verses[0];
  const lines = splitIntoLines(verse.text);
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

  const referenceDelay = 0.2 + (lines.length - 1) * LINE_STAGGER_S + LINE_DURATION_S + 0.4;

  return (
    <Section
      label="Citation biblique"
      className={styles.root}
      style={{ '--verse-bg': `url(${mediaConfig.verses.first})` } as React.CSSProperties}
    >
      <div className={styles.bgImage} aria-hidden="true" />
      <div ref={rootRef} className={`${styles.stage} ${isInView ? styles.inView : ''}`}>
        <span className={styles.kicker} aria-hidden="true">La parole sacrée</span>

        <Container>
          <blockquote className={styles.quote}>
            <p className={styles.text}>
              {lines.map((line, i) => (
                <span key={i} className={styles.lineWrap}>
                  <span
                    className={styles.lineInk}
                    style={{ '--line-delay': `${0.2 + i * LINE_STAGGER_S}s`, '--line-duration': `${LINE_DURATION_S}s` } as React.CSSProperties}
                  >
                    {i === 0 ? '« ' : ''}
                    {line}
                    {i === lines.length - 1 ? ' »' : ''}
                  </span>
                </span>
              ))}
            </p>
            <cite className={styles.reference} style={{ '--ref-delay': `${referenceDelay}s` } as React.CSSProperties}>
              {verse.reference}
            </cite>
          </blockquote>
        </Container>
      </div>
    </Section>
  );
}
