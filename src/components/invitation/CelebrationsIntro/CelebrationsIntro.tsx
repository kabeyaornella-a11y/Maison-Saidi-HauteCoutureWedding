import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './CelebrationsIntro.module.css';

export function CelebrationsIntro() {
  const { venuesConfig } = useClient();

  return (
    <Section label={venuesConfig.intro.title} className={styles.root}>
      <Container>
        <h2 className={styles.title}>{venuesConfig.intro.title}</h2>
        <p className={styles.lead}>{venuesConfig.intro.lead}</p>
        <p className={styles.sub}>{venuesConfig.intro.sub}</p>
      </Container>
    </Section>
  );
}
