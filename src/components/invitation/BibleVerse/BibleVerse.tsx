import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './BibleVerse.module.css';

export function BibleVerse({ verseIndex = 0 }: { verseIndex?: number }) {
  const { invitationConfig, mediaConfig } = useClient();
  const verse = invitationConfig.verses[verseIndex] ?? invitationConfig.verses[0];

  return (
    <Section
      label="Citation biblique"
      className={styles.root}
      style={{ '--verse-bg': `url(${mediaConfig.verses.first})` } as React.CSSProperties}
    >
      <Container>
        <blockquote>
          <p>« {verse.text} »</p>
          <cite>{verse.reference}</cite>
        </blockquote>
      </Container>
    </Section>
  );
}
