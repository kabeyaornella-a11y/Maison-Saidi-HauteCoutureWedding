import { useRef, useState } from 'react';
import { useClient } from '../../../context/ClientContext';
import { compressImage, uploadMedia, isUploadConfigured } from '../../../services/upload.service';
import { submitNetlifyForm } from '../../../services/forms.service';
import { Section } from '../../layout/Section/Section';
import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './LiveAlbumSection.module.css';

type Status = 'idle' | 'compressing' | 'uploading' | 'sent' | 'error' | 'unavailable';

export function LiveAlbumSection() {
  const { memoriesConfig, featuresConfig, cloudinaryConfig } = useClient();
  const [status, setStatus] = useState<Status>(isUploadConfigured(cloudinaryConfig) ? 'idle' : 'unavailable');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);
  const galleryInputRef = useRef<HTMLInputElement | null>(null);

  if (!featuresConfig.liveAlbum.enabled) return null;

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
    setStatus('compressing');
    try {
      const compressed = await compressImage(file);
      setStatus('uploading');
      const { url } = await uploadMedia(compressed, cloudinaryConfig, 'image');
      await submitNetlifyForm('live-album', { photoUrl: url }).catch(() => {
        // La photo est déjà envoyée sur Cloudinary : un souci de log n'empêche pas la suite.
      });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Section label={memoriesConfig.liveAlbum.title} className={styles.root}>
        <Container>
          {previewUrl && <img className={styles.thumbnail} src={previewUrl} alt="" />}
          <p className={styles.confirmation}>{memoriesConfig.liveAlbum.confirmation}</p>
        </Container>
      </Section>
    );
  }

  return (
    <Section label={memoriesConfig.liveAlbum.title} className={styles.root}>
      <Container>
        <h3 className={styles.title}>{memoriesConfig.liveAlbum.title}</h3>
        <p className={styles.intro}>{memoriesConfig.liveAlbum.intro}</p>

        {status === 'unavailable' && (
          <p className={styles.note}>L’envoi de photos sera activé prochainement.</p>
        )}

        {status !== 'unavailable' && (
          <div className={styles.actions}>
            <input
              ref={cameraInputRef}
              className={styles.hiddenInput}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(event) => handleFile(event.target.files?.[0])}
            />
            <input
              ref={galleryInputRef}
              className={styles.hiddenInput}
              type="file"
              accept="image/*"
              onChange={(event) => handleFile(event.target.files?.[0])}
            />
            <Button onClick={() => cameraInputRef.current?.click()} disabled={status === 'compressing' || status === 'uploading'}>
              {memoriesConfig.liveAlbum.captureButtonLabel}
            </Button>
            <Button onClick={() => galleryInputRef.current?.click()} disabled={status === 'compressing' || status === 'uploading'}>
              {memoriesConfig.liveAlbum.uploadButtonLabel}
            </Button>
          </div>
        )}

        {(status === 'compressing' || status === 'uploading') && (
          <p className={styles.note}>{status === 'compressing' ? 'Préparation de la photo…' : 'Envoi en cours…'}</p>
        )}
        {status === 'error' && <p className={styles.error}>Un souci a empêché l’envoi. Réessaie.</p>}
      </Container>
    </Section>
  );
}
