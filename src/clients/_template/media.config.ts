import type { MediaConfig } from '../../types/media.types';

// Change uniquement l'id ci-dessous : il doit correspondre au nom du dossier
// dans src/clients/{id} ET dans public/clients/{id}/assets/.
const CLIENT_ID = 'id-du-client';
const base = `/clients/${CLIENT_ID}/assets`;

export const mediaConfig: MediaConfig = {
  brand: { monogram: `${base}/brand/monogram.png` },
  intro: { background: `${base}/backgrounds/intro.jpg` },
  hero: {
    photo: `${base}/photos/couple-hero.jpg`,
    veilTop: `${base}/overlays/veil-top.png`,
    silkIvory: `${base}/backgrounds/fond-soie-ivory.png`,
    silkBlueIvory: `${base}/backgrounds/fond-satin-blue-ivory.png`,
  },
  hands: { photo: `${base}/photos/couple-hands.jpg` },
  countdown: { background: `${base}/backgrounds/countdown-night.png` },
  verses: { first: `${base}/backgrounds/verse-ivory.png` },
  story: { cover: `${base}/backgrounds/story-cover.png` },
  venues: { background: `${base}/backgrounds/fond-satin-blue-ivory.png` },
  illustrations: {
    mairie: `${base}/illustrations/mairie.png`,
    gardenia: `${base}/illustrations/reception.png`,
  },
  program: { cover: `${base}/backgrounds/programme-clair.png` },
  finalScene: { photo: `${base}/photos/couple-final.jpg` },
};
