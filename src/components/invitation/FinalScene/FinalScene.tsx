import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './FinalScene.module.css';

export function FinalScene() {
  const { invitationConfig, mediaConfig } = useClient();

  const replay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section label="Scène finale" className={styles.root}>
      {mediaConfig.hands.photo && (
        <img className={styles.photo} src={mediaConfig.hands.photo} alt="" aria-hidden="true" />
      )}
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.headline}>La prochaine page s’écrira avec vous.</p>
        <p className={styles.body}>
          Nous avons imaginé cette célébration comme le reflet de notre histoire. Votre présence lui
          donnera toute sa lumière.
        </p>
        <p className={styles.signature}>Rendez-vous le {invitationConfig.couple.weddingDateLabel}.</p>
        <p className={styles.names}>{invitationConfig.couple.displayNames}</p>
        <p className={styles.brand}>
          {invitationConfig.brand.name} — Collection {invitationConfig.brand.collection}
        </p>

        <button type="button" className={styles.replay} onClick={replay}>
          Revivre la collection
        </button>
      </div>
    </Section>
  );
}
