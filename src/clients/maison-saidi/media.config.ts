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
    veilTop: `${base}/backgrounds/bandeau-blanc-drape.png`,
    silkIvory: `${base}/backgrounds/fond-soie-ivory.png`,
    silkBlueIvory: `${base}/backgrounds/fond-bleu-fleurs-bougies.png`,
  },
  hands: {
    photo: `${base}/photos/couple-hands.jpg`,
  },
  countdown: {
    background: `${base}/backgrounds/countdown-starfield.jpg`,
  },
  verses: {
    first: `${base}/backgrounds/verse-ivory.png`,
  },
  story: {
    cover: `${base}/backgrounds/story-cover.png`,
  },
  venues: {
    background: `${base}/backgrounds/fond-bleu-fleurs-bougies.png`,
  },
  illustrations: {
    mairie: `${base}/illustrations/mairie-gennevilliers.png`,
    gardenia: `${base}/illustrations/gardenia-reception.jpg`,
  },
  program: {
    cover: `${base}/backgrounds/programme-clair.jpg`,
  },
  finalScene: {
    photo: `${base}/photos/couple-final.jpg`,
  },
  dressCode: {
    runway: `${base}/illustrations/dresscode-runway.png`,
  },
};
