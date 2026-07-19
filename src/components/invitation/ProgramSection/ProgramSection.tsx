import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './ProgramSection.module.css';

export function ProgramSection() {
  const { programConfig } = useClient();

  return (
    <Section label={programConfig.title} className={styles.root}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{programConfig.title}</h2>
          <p className={styles.subtitle}>{programConfig.subtitle}</p>
        </div>

        <ol className={styles.timeline}>
          {programConfig.steps.map((step, index) => (
            <li key={index} className={styles.step}>
              <span className={styles.time}>{step.time}</span>
              <span className={styles.marker} aria-hidden="true" />
              <div className={styles.stepBody}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.closing}>{programConfig.closingSentence}</p>
      </Container>
    </Section>
  );
}
