import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './LesLieux.module.css';

export function LesLieux() {
  const { venuesConfig, mediaConfig } = useClient();

  return (
    <Section
      id="les-lieux"
      label="Les lieux"
      className={styles.root}
      style={{ '--bg': `url(${mediaConfig.venues.background})` } as React.CSSProperties}
    >
      <Container>
        <h2 className={styles.title}>Les lieux</h2>

        <div className={styles.grid}>
          <div className={`${styles.column} ${styles.civil}`}>
            <p className={styles.colTitle}>Cérémonie civile</p>
            <img className={styles.illustration} src={mediaConfig.illustrations.mairie} alt="Mairie de Gennevilliers" loading="lazy" />
            <p className={styles.venueName}>{venuesConfig.civil.venueName}</p>
            <button type="button" className={styles.joinButton}>
              Nous rejoindre
            </button>
          </div>

          <div className={`${styles.column} ${styles.blessing}`}>
            <p className={styles.colTitle}>Bénédiction nuptiale &amp; réception</p>
            <img className={styles.illustration} src={mediaConfig.illustrations.gardenia} alt="Gardénia Réception" loading="lazy" />
            <p className={styles.venueName}>{venuesConfig.blessing.venueName}</p>
            <button type="button" className={styles.joinButton}>
              Nous rejoindre
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
