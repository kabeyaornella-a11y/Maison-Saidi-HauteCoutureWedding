import styles from './SilkBand.module.css';

type Props = {
  src: string;
  alt?: string;
  monogramSrc?: string;
  monogramAlt?: string;
};

export function SilkBand({ src, alt = '', monogramSrc, monogramAlt = '' }: Props) {
  return (
    <div className={styles.root} aria-hidden={alt === '' ? 'true' : undefined}>
      <img className={styles.image} src={src} alt={alt} draggable={false} loading="lazy" />
      {monogramSrc && (
        <img className={styles.monogram} src={monogramSrc} alt={monogramAlt} draggable={false} loading="lazy" />
      )}
    </div>
  );
}
