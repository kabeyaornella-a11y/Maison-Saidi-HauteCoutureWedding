import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './LesLieux.module.css';

export function LesLieux() {
  const { venuesConfig, invitationConfig, mediaConfig } = useClient();

  return (
    <Section
      id="les-lieux"
      label="Les lieux"
      className={styles.root}
      style={{ '--bg': `url(${mediaConfig.countdown.background})` } as React.CSSProperties}
    >
      <Container>
        <p className={styles.surtitle}>{invitationConfig.venues.surtitle}</p>
        <h2 className={styles.title}>Les lieux</h2>

        <div className={styles.grid}>
          <div className={`${styles.column} ${styles.civil}`}>
            <p className={styles.colTitle}>Cérémonie civile</p>
            <p className={styles.time}>{venuesConfig.civil.time}</p>
            <img className={styles.illustration} src={mediaConfig.illustrations.mairie} alt="Mairie de Gennevilliers" loading="lazy" />
            <p className={styles.venueName}>{venuesConfig.civil.venueName}</p>
            <p className={styles.address}>{venuesConfig.civil.address}</p>
            <button type="button" className={styles.joinButton}>
              {venuesConfig.civil.buttonLabel}
            </button>
          </div>

          <div className={`${styles.column} ${styles.blessing}`}>
            <p className={styles.colTitle}>Bénédiction nuptiale &amp; réception</p>
            <p className={styles.time}>{venuesConfig.blessing.time}</p>
            <img className={styles.illustration} src={mediaConfig.illustrations.gardenia} alt="Gardénia Réception" loading="lazy" />
            <p className={styles.venueName}>{venuesConfig.blessing.venueName}</p>
            <p className={styles.address}>{venuesConfig.blessing.address}</p>
            <button type="button" className={styles.joinButton}>
              {venuesConfig.blessing.buttonLabel}
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
