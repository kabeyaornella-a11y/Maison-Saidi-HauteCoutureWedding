import { useMemo, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import type { SeatingGuest } from '../../../types/seating.types';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../layout/Container/Container';
import { Section } from '../../layout/Section/Section';
import styles from './SeatingPlanSection.module.css';

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLocaleLowerCase('fr-FR');

export function SeatingPlanSection() {
  const { invitationConfig, seatingPlanData } = useClient();
  const guestFallbackLabel = `Invité ${invitationConfig.brand.name}`;

  const [query, setQuery] = useState('');
  const [selectedGuest, setSelectedGuest] = useState<SeatingGuest | null>(null);
  const [showMap, setShowMap] = useState(false);

  const matches = useMemo(() => {
    const needle = normalize(query);
    if (needle.length < 2) return [];
    return seatingPlanData.guests.filter((guest) => normalize(guest.displayName).includes(needle)).slice(0, 6);
  }, [query, seatingPlanData.guests]);

  const selectedTable = selectedGuest
    ? seatingPlanData.tables.find((table) => table.id === selectedGuest.tableId) ?? null
    : null;

  const tableGuests = selectedTable
    ? seatingPlanData.guests.filter((guest) => guest.tableId === selectedTable.id)
    : [];

  const selectGuest = (guest: SeatingGuest) => {
    setSelectedGuest(guest);
    setQuery(guest.displayName);
    setShowMap(false);
  };

  const reset = () => {
    setQuery('');
    setSelectedGuest(null);
    setShowMap(false);
  };

  return (
    <Section id="plan-de-table" label="Plan de table interactif" className={styles.root}>
      <div aria-hidden className={styles.spotlight} />
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            {invitationConfig.brand.name} · {invitationConfig.brand.edition}
          </p>
          <h2>{seatingPlanData.roomName}</h2>
          <p className={styles.script}>Votre place vous attend.</p>
          <p className={styles.intro}>
            Chaque invité occupe une place unique dans cette journée. Retrouvez votre table en quelques secondes.
          </p>
        </div>

        <div className={styles.searchPanel}>
          <label htmlFor="guest-search">Rechercher mon nom</label>
          <div className={styles.searchWrap}>
            <span aria-hidden className={styles.searchIcon}>⌕</span>
            <input
              id="guest-search"
              type="search"
              autoComplete="name"
              placeholder="Prénom et nom…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSelectedGuest(null);
                setShowMap(false);
              }}
            />
            {query && <button type="button" className={styles.clear} onClick={reset} aria-label="Effacer la recherche">×</button>}
          </div>

          {!selectedGuest && query.trim().length >= 2 && (
            <div className={styles.results} role="listbox" aria-label="Résultats de recherche">
              {matches.length > 0 ? (
                matches.map((guest) => (
                  <button key={guest.id} type="button" onClick={() => selectGuest(guest)} role="option">
                    <strong>{guest.displayName}</strong>
                    <span>{guest.groupLabel ?? guestFallbackLabel}</span>
                  </button>
                ))
              ) : (
                <p>Aucun nom trouvé. Vérifiez l’orthographe ou rapprochez-vous des mariés.</p>
              )}
            </div>
          )}
        </div>

        {selectedGuest && selectedTable && (
          <div className={styles.reveal} aria-live="polite">
            <div className={styles.guestCard}>
              <p className={styles.cardLabel}>Accréditation retrouvée</p>
              <h3>{selectedGuest.displayName}</h3>
              <p className={styles.tableName}>{selectedTable.name}</p>
              <p>{selectedGuest.groupLabel ?? guestFallbackLabel}</p>
              <p className={styles.capacity}>{tableGuests.length} convive{tableGuests.length > 1 ? 's' : ''} actuellement renseigné{tableGuests.length > 1 ? 's' : ''}</p>
              <Button onClick={() => setShowMap((value) => !value)}>
                {showMap ? 'Masquer le plan' : 'Voir ma table'}
              </Button>
            </div>

            {showMap && (
              <div className={styles.mapArea}>
                <div className={styles.mapIntro}>
                  <p className={styles.cardLabel}>Plan du salon</p>
                  <h3>Vous êtes ici.</h3>
                </div>
                <div className={styles.room} aria-label={`Plan de salle, ${selectedTable.name} mise en évidence`}>
                  <div className={styles.stage}>Scène</div>
                  {seatingPlanData.tables.map((table) => {
                    const active = table.id === selectedTable.id;
                    return (
                      <div
                        key={table.id}
                        className={`${styles.table} ${active ? styles.active : ''}`}
                        style={{ left: `${table.x}%`, top: `${table.y}%` }}
                        aria-label={`${table.name}${active ? ', votre table' : ''}`}
                      >
                        <span>{table.number}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.tableDetails}>
                  <div>
                    <p className={styles.cardLabel}>Votre table</p>
                    <h3>{selectedTable.name}</h3>
                  </div>
                  <ul>
                    {tableGuests.map((guest) => <li key={guest.id}>{guest.displayName}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}
