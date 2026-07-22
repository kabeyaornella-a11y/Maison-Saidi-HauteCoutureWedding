import { useClient } from '../../../context/ClientContext';
import { useCountdown } from '../../../hooks/useCountdown';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './CountdownSection.module.css';

const BEAMS = [
  { left: '12%', rotate: 14, width: 90, height: 260 },
  { left: '37%', rotate: 4, width: 100, height: 300 },
  { left: '62%', rotate: -5, width: 100, height: 300 },
  { left: '86%', rotate: -14, width: 90, height: 260 },
] as const;

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
          <h2>{invitationConfig.countdown.title}</h2>
          <div className={styles.gridWrap}>
            <div className={styles.beams} aria-hidden="true">
              {BEAMS.map((beam, i) => (
                <span
                  key={i}
                  className={styles.beam}
                  style={
                    {
                      left: beam.left,
                      width: `${beam.width}px`,
                      height: `${beam.height}px`,
                      '--beam-rotate': `${beam.rotate}deg`,
                      animationDelay: `${i * 1.1}s`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
            <div className={styles.grid}>
              {values.map((v, i) => (
                <div className={styles.unit} key={invitationConfig.countdown.labels[i]}>
                  <strong>{String(v).padStart(2, '0')}</strong>
                  <span>{invitationConfig.countdown.labels[i]}</span>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.sentence}>{invitationConfig.countdown.sentence}</p>
        </div>
      </Container>
    </Section>
  );
}
