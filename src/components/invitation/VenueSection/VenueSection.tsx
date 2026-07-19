import type { ReactNode } from 'react';
import type { Venue } from '../../../types/venues.types';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './VenueSection.module.css';

type Props = {
  id: string;
  venue: Venue;
  icon: ReactNode;
  tone?: 'ivory' | 'navy';
};

export function VenueSection({ id, venue, icon, tone = 'ivory' }: Props) {
  return (
    <Section id={id} label={venue.sectionTitle} className={`${styles.root} ${styles[tone]}`}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.iconFrame} aria-hidden="true">
            {icon}
          </div>

          <div className={styles.content}>
            <p className={styles.act}>{venue.act}</p>
            <h2 className={styles.sectionTitle}>{venue.sectionTitle}</h2>
            <p className={styles.venueName}>{venue.venueName}</p>

            <p className={styles.description}>{venue.description}</p>
            {venue.secondaryDescription && (
              <p className={styles.description}>{venue.secondaryDescription}</p>
            )}

            <dl className={styles.infoList}>
              <div>
                <dt>Date</dt>
                <dd>{venue.dateLabel}</dd>
              </div>
              <div>
                <dt>Heure</dt>
                <dd>{venue.time}</dd>
              </div>
              <div>
                <dt>Adresse</dt>
                <dd>{venue.address}</dd>
              </div>
            </dl>

            {venue.mapUrl ? (
              <Button as="a" href={venue.mapUrl} target="_blank" rel="noreferrer">
                {venue.buttonLabel}
              </Button>
            ) : (
              <Button disabled>{venue.buttonLabel}</Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
