import type { MediaConfig } from '../../types/media.types';

const base = '/clients/maison-saidi/assets';

export const mediaConfig: MediaConfig = {
  brand: {
    monogram: `${base}/brand/monogram-as.png`,
  },
  intro: {
    background: `${base}/backgrounds/intro-maison.jpg`,
  },
  hero: {
    photo: `${base}/photos/couple-hero.png`,
    veilTop: `${base}/overlays/veil-top.png`,
    veilBottom: `${base}/overlays/veil-bottom.png`,
    silkIvory: `${base}/backgrounds/fond-soie-ivory.png`,
    silkBlueIvory: `${base}/backgrounds/fond-satin-blue-ivory.png`,
  },
  hands: {
    photo: `${base}/photos/couple-hands.jpg`,
  },
  countdown: {
    background: `${base}/backgrounds/countdown-night.png`,
  },
  verses: {
    first: `${base}/backgrounds/verse-ivory.png`,
  },
};
