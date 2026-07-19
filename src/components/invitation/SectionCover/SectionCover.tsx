import { Section } from '../../layout/Section/Section';
import styles from './SectionCover.module.css';

type Props = {
  id?: string;
  src: string;
  alt?: string;
  title: string;
  subtitle?: string;
};

export function SectionCover({ id, src, alt = '', title, subtitle }: Props) {
  return (
    <Section id={id} label={title} className={styles.root}>
      <img className={styles.image} src={src} alt={alt} draggable={false} loading="lazy" />
      <div className={styles.identity}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </Section>
  );
}
