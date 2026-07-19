import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import styles from './HeroCouple.module.css';

export function HeroCouple() {
  const { invitationConfig, mediaConfig } = useClient();

  return (
    <Section id="hero" label={invitationConfig.couple.displayNames} className={styles.root}>
      <div className={styles.portraitFrame}>
        <img
          className={styles.photo}
          src={mediaConfig.hero.photo}
          alt={invitationConfig.couple.heroPhotoAlt}
          fetchPriority="high"
          draggable={false}
        />

        <div className={styles.photoLight} aria-hidden="true" />
        <div className={styles.photoShade} aria-hidden="true" />

        <div className={styles.topVeilFrame} aria-hidden="true">
          <img className={styles.topVeil} src={mediaConfig.hero.veilTop} alt="" draggable={false} />
        </div>

        <div className={styles.bottomVeilFrame} aria-hidden="true">
          <img className={styles.bottomVeil} src={mediaConfig.hero.veilBottom} alt="" draggable={false} />
        </div>

        <div className={styles.silkTransition} aria-hidden="true" />

        <div className={styles.identity}>
          <p className={styles.collection}>{invitationConfig.brand.collection}</p>
          <h1>{invitationConfig.couple.displayNames}</h1>
          <span className={styles.date}>{invitationConfig.couple.weddingDateLabel}</span>
        </div>
      </div>
    </Section>
  );
}
