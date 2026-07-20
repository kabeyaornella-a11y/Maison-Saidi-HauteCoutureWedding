import { useClient } from '../../../context/ClientContext';
import { useCountdown } from '../../../hooks/useCountdown';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './CountdownSection.module.css';

export function CountdownSection() {
  const { invitationConfig, mediaConfig } = useClient();
  const value = useCountdown(invitationConfig.couple.weddingDate);
  const values = [value.days, value.hours, value.minutes, value.seconds];

  return (
    <Section
      label="Compte à rebours"
      className={styles.root}
      style={{ '--bg': `url(${mediaConfig.countdown.background})` } as React.CSSProperties}
    >
      <Container>
        <div className={styles.content}>
          <p className={styles.surtitle}>Collection {invitationConfig.brand.collection}</p>
          <h2>{invitationConfig.countdown.title}</h2>
          <div className={styles.grid}>
            {values.map((v, i) => (
              <div className={styles.unit} key={invitationConfig.countdown.labels[i]}>
                <strong>{String(v).padStart(2, '0')}</strong>
                <span>{invitationConfig.countdown.labels[i]}</span>
              </div>
            ))}
          </div>
          <p className={styles.sentence}>{invitationConfig.countdown.sentence}</p>
        </div>
      </Container>
    </Section>
  );
}
