import styles from './SilkBand.module.css';

type Props = {
  src: string;
  alt?: string;
};

export function SilkBand({ src, alt = '' }: Props) {
  return (
    <div className={styles.root} aria-hidden={alt === '' ? 'true' : undefined}>
      <img className={styles.image} src={src} alt={alt} draggable={false} loading="lazy" />
    </div>
  );
}
