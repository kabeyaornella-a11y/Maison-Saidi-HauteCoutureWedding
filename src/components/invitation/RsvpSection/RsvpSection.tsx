import { useState, type FormEvent } from 'react';
import { useClient } from '../../../context/ClientContext';
import { submitNetlifyForm } from '../../../services/forms.service';
import type { RsvpFormValues } from '../../../types/rsvp.types';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import { Modal } from '../../ui/Modal/Modal';
import styles from './RsvpSection.module.css';

const initialValues: RsvpFormValues = {
  firstName: '',
  lastName: '',
  attendance: '',
  attendanceScope: '',
  adults: '1',
  children: '0',
  companionName: '',
  dietaryNeeds: '',
  message: '',
};

export function RsvpSection() {
  const { rsvpConfig, featuresConfig } = useClient();
  const [values, setValues] = useState<RsvpFormValues>(initialValues);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [confirmed, setConfirmed] = useState<'accepted' | 'declined' | null>(null);

  if (!featuresConfig.rsvp.enabled) return null;

  const set = <K extends keyof RsvpFormValues>(field: K, value: RsvpFormValues[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.attendance) return;
    setStatus('sending');
    try {
      await submitNetlifyForm('rsvp', values as unknown as Record<string, string>);
      setConfirmed(values.attendance);
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  };

  const closeModal = () => {
    setConfirmed(null);
    setValues(initialValues);
  };

  const modalTitle = (confirmed === 'accepted' ? rsvpConfig.successTitle : rsvpConfig.declineTitle).replace(
    '{{firstName}}',
    values.firstName || '',
  );

  return (
    <Section id="rsvp" label={rsvpConfig.title} className={styles.root}>
      <Container>
        <p className={styles.edition}>{rsvpConfig.editionLabel}</p>
        <h2 className={styles.title}>{rsvpConfig.title}</h2>
        <p className={styles.intro}>{rsvpConfig.intro}</p>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
            <input required placeholder="Prénom" value={values.firstName} onChange={(e) => set('firstName', e.target.value)} />
            <input required placeholder="Nom" value={values.lastName} onChange={(e) => set('lastName', e.target.value)} />
          </div>

          <fieldset className={styles.fieldset}>
            <legend>Serez-vous des nôtres ?</legend>
            <div className={styles.choices}>
              <label>
                <input type="radio" name="attendance" required checked={values.attendance === 'accepted'} onChange={() => set('attendance', 'accepted')} />
                Oui, avec joie
              </label>
              <label>
                <input type="radio" name="attendance" required checked={values.attendance === 'declined'} onChange={() => set('attendance', 'declined')} />
                Non, avec regret
              </label>
            </div>
          </fieldset>

          {values.attendance === 'accepted' && (
            <>
              <fieldset className={styles.fieldset}>
                <legend>À quelle partie de la journée participerez-vous ?</legend>
                <div className={styles.choices}>
                  <label>
                    <input type="radio" name="attendanceScope" required checked={values.attendanceScope === 'civil'} onChange={() => set('attendanceScope', 'civil')} />
                    Cérémonie civile
                  </label>
                  <label>
                    <input type="radio" name="attendanceScope" required checked={values.attendanceScope === 'blessing-reception'} onChange={() => set('attendanceScope', 'blessing-reception')} />
                    Bénédiction & réception
                  </label>
                  <label>
                    <input type="radio" name="attendanceScope" required checked={values.attendanceScope === 'full-day'} onChange={() => set('attendanceScope', 'full-day')} />
                    L’ensemble de la journée
                  </label>
                </div>
              </fieldset>

              {featuresConfig.rsvp.collectAdults && (
                <div className={styles.row}>
                  <label className={styles.numberField}>
                    Nombre d’adultes
                    <input type="number" min={0} value={values.adults} onChange={(e) => set('adults', e.target.value)} />
                  </label>
                  {featuresConfig.rsvp.collectChildren && (
                    <label className={styles.numberField}>
                      Nombre d’enfants
                      <input type="number" min={0} value={values.children} onChange={(e) => set('children', e.target.value)} />
                    </label>
                  )}
                </div>
              )}

              <input placeholder="Nom de l’accompagnant·e (facultatif)" value={values.companionName} onChange={(e) => set('companionName', e.target.value)} />

              {featuresConfig.rsvp.collectDietaryNeeds && (
                <input placeholder="Régime alimentaire ou allergies (facultatif)" value={values.dietaryNeeds} onChange={(e) => set('dietaryNeeds', e.target.value)} />
              )}
            </>
          )}

          <textarea placeholder="Message pour les mariés (facultatif)" rows={3} value={values.message} onChange={(e) => set('message', e.target.value)} />

          {status === 'error' && <p className={styles.error}>Un souci a empêché l’envoi. Réessaie dans un instant.</p>}

          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi…' : rsvpConfig.submitButtonLabel}
          </Button>
        </form>
      </Container>

      {confirmed && (
        <Modal onClose={closeModal} labelledBy="rsvp-modal-title">
          <p className={styles.modalBadge}>
            {confirmed === 'accepted' ? rsvpConfig.successBadge : rsvpConfig.declineBadge}
          </p>
          <h3 id="rsvp-modal-title" className={styles.modalTitle}>
            {modalTitle}
          </h3>
          <p className={styles.modalBody}>
            {confirmed === 'accepted' ? rsvpConfig.successBody : rsvpConfig.declineBody}
          </p>
          <Button onClick={closeModal}>{rsvpConfig.closeButtonLabel}</Button>
        </Modal>
      )}
    </Section>
  );
}
