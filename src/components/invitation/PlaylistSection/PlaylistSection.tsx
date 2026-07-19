import { useState, type FormEvent } from 'react';
import { useClient } from '../../../context/ClientContext';
import { submitNetlifyForm } from '../../../services/forms.service';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './PlaylistSection.module.css';

export function PlaylistSection() {
  const { memoriesConfig, featuresConfig } = useClient();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [values, setValues] = useState({ title: '', artist: '', firstName: '', message: '' });

  if (!featuresConfig.playlist.enabled) return null;

  const update = (field: keyof typeof values) => (event: FormEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.currentTarget.value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    try {
      await submitNetlifyForm('playlist', values);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Section label={memoriesConfig.playlist.title} className={styles.root}>
        <Container>
          <p className={styles.confirmation}>{memoriesConfig.playlist.confirmation}</p>
        </Container>
      </Section>
    );
  }

  return (
    <Section label={memoriesConfig.playlist.title} className={styles.root}>
      <Container>
        <h3 className={styles.title}>{memoriesConfig.playlist.title}</h3>
        <p className={styles.intro}>{memoriesConfig.playlist.intro}</p>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
            <input required name="title" placeholder="Titre de la chanson" value={values.title} onChange={update('title')} />
            <input required name="artist" placeholder="Artiste" value={values.artist} onChange={update('artist')} />
          </div>
          <div className={styles.row}>
            <input required name="firstName" placeholder="Ton prénom" value={values.firstName} onChange={update('firstName')} />
          </div>
          <textarea
            name="message"
            placeholder="Un souvenir ou message (facultatif)"
            value={values.message}
            onChange={(event) => setValues((prev) => ({ ...prev, message: event.currentTarget.value }))}
            rows={3}
          />

          {status === 'error' && (
            <p className={styles.error}>Un souci a empêché l’envoi. Réessaie dans un instant.</p>
          )}

          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi…' : memoriesConfig.playlist.buttonLabel}
          </Button>
        </form>
      </Container>
    </Section>
  );
}
