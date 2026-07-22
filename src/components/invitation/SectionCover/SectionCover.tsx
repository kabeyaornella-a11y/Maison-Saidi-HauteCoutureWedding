import { Section } from '../../layout/Section/Section';
import styles from './SectionCover.module.css';

type Props = {
  id?: string;
  src: string;
  alt?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  fadeTop?: boolean;
  uppercaseTitle?: boolean;
  align?: 'center' | 'top';
};

export function SectionCover({
  id,
  src,
  alt = '',
  kicker,
  title,
  subtitle,
  fadeTop = false,
  uppercaseTitle = false,
  align = 'center',
}: Props) {
  return (
    <Section id={id} label={title} className={styles.root}>
      <img
        className={`${styles.image} ${fadeTop ? styles.imageFadeTop : ''}`}
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
      />
      <div className={`${styles.identity} ${align === 'top' ? styles.identityTop : ''}`}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h2 className={`${styles.title} ${uppercaseTitle ? styles.titleUppercase : ''}`}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </Section>
  );
}
