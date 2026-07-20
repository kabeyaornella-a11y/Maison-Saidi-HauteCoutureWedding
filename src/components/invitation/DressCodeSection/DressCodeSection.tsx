import { useClient } from '../../../context/ClientContext';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import styles from './DressCodeSection.module.css';

const BEAMS = [
  { left: '29%', top: '5%', rotate: 18, width: 110, height: 600 },
  { left: '52%', top: '10%', rotate: 4, width: 130, height: 540 },
  { left: '73%', top: '14%', rotate: -14, width: 120, height: 500 },
] as const;

export function DressCodeSection() {
  const { dressCodeConfig, mediaConfig } = useClient();

  return (
    <Section label={dressCodeConfig.title} className={styles.root}>
      <Container>
        <p className={styles.surtitle}>{dressCodeConfig.surtitle}</p>
        <h2 className={styles.title}>{dressCodeConfig.title}</h2>
        <p className={styles.phrase}>{dressCodeConfig.phrase}</p>
        <p className={styles.description}>{dressCodeConfig.description}</p>

        <div className={styles.runwayFrame}>
          <div className={styles.beams} aria-hidden="true">
            {BEAMS.map((beam, i) => (
              <span
                key={i}
                className={styles.beam}
                style={
                  {
                    left: beam.left,
                    top: beam.top,
                    width: `${beam.width}px`,
                    height: `${beam.height}px`,
                    '--beam-rotate': `${beam.rotate}deg`,
                    animationDelay: `${i * 1.3}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
          <img className={styles.runway} src={mediaConfig.dressCode.runway} alt="" loading="lazy" />
        </div>

        <div className={styles.palette} aria-hidden="true">
          {dressCodeConfig.paletteColors.map((color) => (
            <span key={color} className={styles.swatch} style={{ background: color }} />
          ))}
        </div>

        <p className={styles.mention}>{dressCodeConfig.mention}</p>
      </Container>
    </Section>
  );
}
