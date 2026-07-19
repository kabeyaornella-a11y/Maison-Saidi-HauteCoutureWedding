import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './HandsSection.module.css';

export function HandsSection() {
  const { invitationConfig, mediaConfig } = useClient();
  return (
    <Section label="La promesse" className={styles.root}>
      <img className={styles.photo} src={mediaConfig.hands.photo} alt={invitationConfig.hands.photoAlt} loading="lazy" />
      <p>{invitationConfig.hands.caption}</p>
    </Section>
  );
}
