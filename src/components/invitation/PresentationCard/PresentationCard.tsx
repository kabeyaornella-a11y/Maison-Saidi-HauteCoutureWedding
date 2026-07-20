import { useClient } from '../../../context/ClientContext';
import styles from './PresentationCard.module.css';

export function PresentationCard() {
  const { invitationConfig } = useClient();
  const { brand, presentation, couple } = invitationConfig;

  return (
    <div className={styles.root}>
      <p className={styles.brandName}>{brand.name}</p>
      <p className={styles.presents}>{presentation.presents}</p>
      <p className={styles.collectionType}>{presentation.collectionType}</p>
      <h2 className={styles.collectionName}>{presentation.collectionName}</h2>
      <p className={styles.season}>{presentation.season}</p>

      <span className={styles.star} aria-hidden="true">✦</span>

      <p className={styles.presentationLabel}>{presentation.presentationLabel}</p>
      <p className={styles.date}>{couple.weddingDateLabel}</p>

      <span className={styles.divider} aria-hidden="true" />

      <p className={styles.paragraph}>{presentation.accreditationText}</p>
      <p className={styles.paragraph}>{presentation.invitationText}</p>
    </div>
  );
}
