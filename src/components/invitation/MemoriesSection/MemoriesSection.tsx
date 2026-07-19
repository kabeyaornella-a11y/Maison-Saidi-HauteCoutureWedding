import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './MemoriesSection.module.css';

export function MemoriesSection() {
  const { memoriesConfig } = useClient();

  return (
    <Section label={memoriesConfig.sectionTitle} className={styles.root}>
      <Container>
        <h2 className={styles.title}>{memoriesConfig.sectionTitle}</h2>
        <p className={styles.intro}>{memoriesConfig.intro}</p>
      </Container>
    </Section>
  );
}
