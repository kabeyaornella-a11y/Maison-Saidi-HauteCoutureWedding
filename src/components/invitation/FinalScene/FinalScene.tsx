import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './FinalScene.module.css';

export function FinalScene() {
  const { invitationConfig, mediaConfig } = useClient();

  return (
    <Section label="Scène finale" className={styles.root}>
      <img
        className={styles.photo}
        src={mediaConfig.finalScene.photo}
        alt={invitationConfig.couple.heroPhotoAlt}
        loading="lazy"
      />
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.dateLabel}>{invitationConfig.finalScene.dateLabel}</p>
        <p className={styles.phrase}>{invitationConfig.finalScene.phrase}</p>
        <p className={styles.signatureLine}>{invitationConfig.finalScene.signatureLine}</p>
        <p className={styles.names}>{invitationConfig.couple.displayNames}</p>
      </div>

      <p className={styles.footer}>{invitationConfig.finalScene.footer}</p>
    </Section>
  );
}
