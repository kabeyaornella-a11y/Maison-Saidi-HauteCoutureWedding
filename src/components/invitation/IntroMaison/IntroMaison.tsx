import { useEffect, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import styles from './IntroMaison.module.css';

const EXIT_DURATION_MS = 850;

export function IntroMaison() {
  const { invitationConfig, mediaConfig } = useClient();
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  const enterInvitation = () => {
    if (isLeaving) return;
    setIsLeaving(true);

    window.setTimeout(() => {
      setIsVisible(false);
      document.getElementById('hero')?.scrollIntoView({ block: 'start' });
    }, EXIT_DURATION_MS);
  };

  if (!isVisible) return null;

  return (
    <section
      className={`${styles.root} ${isLeaving ? styles.leaving : ''}`}
      aria-label={invitationConfig.brand.introAriaLabel}
      style={{ '--intro-image': `url(${mediaConfig.intro.background})` } as React.CSSProperties}
    >
      <div className={styles.background} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.monogramStage}>
        <div className={styles.monogramWrap}>
          <img
            className={styles.monogram}
            src={mediaConfig.brand.monogram}
            alt={invitationConfig.brand.monogramAlt}
            draggable={false}
          />
          <span
            className={styles.monogramShimmer}
            style={{
              WebkitMaskImage: `url(${mediaConfig.brand.monogram})`,
              maskImage: `url(${mediaConfig.brand.monogram})`,
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className={styles.copy}>
        <h1 className={styles.surtitle}>{invitationConfig.intro.surtitle}</h1>
        <span className={styles.rule} aria-hidden="true" />
        <p className={styles.opening}>{invitationConfig.brand.openingText}</p>
        <p className={styles.invitationPhrase}>{invitationConfig.intro.invitationPhrase}</p>
      </div>

      <button
        type="button"
        className={styles.enterButton}
        onClick={enterInvitation}
        disabled={isLeaving}
      >
        <span className={styles.enterLabel}>{invitationConfig.intro.enterLabel}</span>
        <span className={styles.chevrons} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
    </section>
  );
}
