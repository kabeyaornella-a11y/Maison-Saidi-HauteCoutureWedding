import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './EditorialBanner.module.css';

export function EditorialBanner() {
  const { invitationConfig, mediaConfig } = useClient();

  return (
    <Section label="Annonce du mariage" className={styles.root}>
      <div className={styles.silkBackdrop} aria-hidden="true">
        <img className={styles.silkImage} src={mediaConfig.hero.silkIvory} alt="" draggable={false} />
        <img className={styles.silkAccent} src={mediaConfig.hero.silkBlueIvory} alt="" draggable={false} />
      </div>

      <img aria-hidden="true" className={styles.mark} src={mediaConfig.brand.monogram} alt="" />

      <Container>
        <div className={styles.content}>
          <p className={styles.kicker}>{invitationConfig.brand.edition}</p>
          <p className={styles.names}>{invitationConfig.couple.displayNames}</p>
          <div className={styles.rule} aria-hidden="true" />
          <p className={styles.sentence}>{invitationConfig.editorial.invitationSentence}.</p>
          <p className={styles.date}>{invitationConfig.couple.weddingDateLabel}</p>
          <p className={styles.label}>{invitationConfig.editorial.editionLabel}</p>
        </div>
      </Container>
    </Section>
  );
}
