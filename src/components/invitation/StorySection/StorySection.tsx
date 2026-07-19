import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './StorySection.module.css';

export function StorySection() {
  const { storyConfig } = useClient();

  return (
    <Section label={storyConfig.title} className={styles.root}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{storyConfig.title}</h2>
          <p className={styles.subtitle}>{storyConfig.subtitle}</p>
        </div>

        <div className={styles.chapters}>
          {storyConfig.chapters.map((chapter, index) => (
            <article key={chapter.id} className={styles.chapter}>
              {chapter.imageUrl && (
                <div className={styles.imageFrame}>
                  <img
                    className={styles.image}
                    src={chapter.imageUrl}
                    alt={chapter.imageAlt ?? ''}
                    loading="lazy"
                  />
                </div>
              )}
              <div className={styles.text}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <p className={styles.eyebrow}>{chapter.eyebrow}</p>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                {chapter.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className={styles.closing}>{storyConfig.closingSentence}</p>
      </Container>
    </Section>
  );
}
