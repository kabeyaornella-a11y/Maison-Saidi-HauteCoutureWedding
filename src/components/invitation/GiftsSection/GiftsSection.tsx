import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './GiftsSection.module.css';

export function GiftsSection() {
  const { giftsConfig, featuresConfig } = useClient();
  if (!featuresConfig.gifts.enabled) return null;

  return (
    <Section label={giftsConfig.title} className={styles.root}>
      <Container>
        <h2 className={styles.title}>{giftsConfig.title}</h2>
        <p className={styles.intro}>{giftsConfig.intro}</p>
        <p className={styles.secondary}>{giftsConfig.secondaryIntro}</p>

        <div className={styles.actions}>
          {giftsConfig.listUrl ? (
            <Button as="a" href={giftsConfig.listUrl} target="_blank" rel="noreferrer">
              {giftsConfig.listButtonLabel}
            </Button>
          ) : (
            <Button disabled>{giftsConfig.listButtonLabel}</Button>
          )}
          {giftsConfig.chapterUrl ? (
            <Button as="a" href={giftsConfig.chapterUrl} target="_blank" rel="noreferrer">
              {giftsConfig.chapterButtonLabel}
            </Button>
          ) : (
            <Button disabled>{giftsConfig.chapterButtonLabel}</Button>
          )}
        </div>
      </Container>
    </Section>
  );
}
