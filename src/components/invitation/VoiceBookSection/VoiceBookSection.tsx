import { useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { useMediaRecorder } from '../../../hooks/useMediaRecorder';
import { uploadMedia, isUploadConfigured } from '../../../services/upload.service';
import { submitNetlifyForm } from '../../../services/forms.service';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './VoiceBookSection.module.css';

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function VoiceBookSection() {
  const { memoriesConfig, featuresConfig, cloudinaryConfig } = useClient();
  const maxDuration = featuresConfig.voiceBook.maxDurationSeconds;
  const recorder = useMediaRecorder(maxDuration);
  const [sendState, setSendState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  if (!featuresConfig.voiceBook.enabled) return null;

  const configured = isUploadConfigured(cloudinaryConfig);

  const send = async () => {
    if (!recorder.audioBlob) return;
    setSendState('sending');
    try {
      const { url } = await uploadMedia(recorder.audioBlob, cloudinaryConfig, 'video');
      await submitNetlifyForm('voice-book', { audioUrl: url }).catch(() => {});
      setSendState('sent');
    } catch {
      setSendState('error');
    }
  };

  if (sendState === 'sent') {
    return (
      <Section label={memoriesConfig.voiceBook.title} className={styles.root}>
        <Container>
          <p className={styles.confirmation}>{memoriesConfig.voiceBook.confirmation}</p>
        </Container>
      </Section>
    );
  }

  return (
    <Section label={memoriesConfig.voiceBook.title} className={styles.root}>
      <Container>
        <h3 className={styles.title}>{memoriesConfig.voiceBook.title}</h3>
        <p className={styles.intro}>{memoriesConfig.voiceBook.intro}</p>

        {!configured && <p className={styles.note}>L’enregistrement sera activé prochainement.</p>}

        {configured && (
          <div className={styles.recorder}>
            {recorder.state === 'idle' && (
              <Button onClick={recorder.start}>{memoriesConfig.voiceBook.recordButtonLabel}</Button>
            )}

            {recorder.state === 'recording' && (
              <>
                <p className={styles.timer}>
                  <span className={styles.dot} aria-hidden="true" /> {formatTime(recorder.seconds)} / {formatTime(maxDuration)}
                </p>
                <Button onClick={recorder.stop}>Arrêter</Button>
              </>
            )}

            {recorder.state === 'stopped' && recorder.audioUrl && (
              <div className={styles.preview}>
                <audio className={styles.player} controls src={recorder.audioUrl} />
                <div className={styles.previewActions}>
                  <Button onClick={recorder.reset} disabled={sendState === 'sending'}>
                    Recommencer
                  </Button>
                  <Button onClick={send} disabled={sendState === 'sending'}>
                    {sendState === 'sending' ? 'Envoi…' : 'Envoyer ce message'}
                  </Button>
                </div>
                {sendState === 'error' && <p className={styles.error}>Un souci a empêché l’envoi. Réessaie.</p>}
              </div>
            )}

            {recorder.state === 'error' && recorder.error && <p className={styles.error}>{recorder.error}</p>}
          </div>
        )}
      </Container>
    </Section>
  );
}
