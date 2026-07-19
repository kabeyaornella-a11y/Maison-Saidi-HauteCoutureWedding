import styles from './GoldDivider.module.css';

export function GoldDivider() {
  return (
    <div className={styles.root} aria-hidden="true">
      <span className={styles.line} />
    </div>
  );
}
