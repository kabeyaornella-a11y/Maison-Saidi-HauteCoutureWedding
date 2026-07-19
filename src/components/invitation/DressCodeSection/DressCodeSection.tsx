import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './DressCodeSection.module.css';

function toKebabCase(key: string): string {
  return key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

export function DressCodeSection() {
  const { dressCodeConfig } = useClient();

  return (
    <Section label={dressCodeConfig.title} className={styles.root}>
      <Container>
        <p className={styles.kicker}>{dressCodeConfig.kicker}</p>
        <h2 className={styles.title}>{dressCodeConfig.title}</h2>
        <p className={styles.intro}>{dressCodeConfig.intro}</p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>{dressCodeConfig.forHerLabel}</h3>
            <p>{dressCodeConfig.forHerText}</p>
          </div>
          <div className={styles.column}>
            <h3>{dressCodeConfig.forHimLabel}</h3>
            <p>{dressCodeConfig.forHimText}</p>
          </div>
        </div>

        <div className={styles.palette}>
          <div className={styles.swatches} aria-hidden="true">
            {dressCodeConfig.paletteColors.map((colorKey) => (
              <span
                key={colorKey}
                className={styles.swatch}
                style={{ background: `var(--${toKebabCase(colorKey)})` }}
              />
            ))}
          </div>
          <p className={styles.paletteLabel}>{dressCodeConfig.paletteLabel}</p>
          {dressCodeConfig.paletteNote && <p className={styles.paletteNote}>{dressCodeConfig.paletteNote}</p>}
        </div>

        <p className={styles.closing}>{dressCodeConfig.closingSentence}</p>
      </Container>
    </Section>
  );
}
