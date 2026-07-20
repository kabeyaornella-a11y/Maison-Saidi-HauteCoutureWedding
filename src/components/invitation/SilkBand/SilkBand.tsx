import type { ReactNode } from 'react';
import styles from './SilkBand.module.css';

type Props = {
  src: string;
  alt?: string;
  monogramSrc?: string;
  monogramAlt?: string;
  edgeLines?: boolean;
  children?: ReactNode;
};

export function SilkBand({ src, alt = '', monogramSrc, monogramAlt = '', edgeLines = false, children }: Props) {
  return (
    <div className={`${styles.root} ${children ? styles.hasContent : ''}`} aria-hidden={alt === '' ? 'true' : undefined}>
      <img className={styles.image} src={src} alt={alt} draggable={false} loading="lazy" />
      {monogramSrc && (
        <img className={styles.monogram} src={monogramSrc} alt={monogramAlt} draggable={false} loading="lazy" />
      )}
      {edgeLines && (
        <>
          <span className={`${styles.edgeLine} ${styles.edgeLineTop}`} />
          <span className={`${styles.edgeLine} ${styles.edgeLineBottom}`} />
        </>
      )}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}
