import type { FeaturesConfig } from '../../types/media.types';

export const featuresConfig: FeaturesConfig = {
  music: { enabled: false },
  playlist: { enabled: true },
  gifts: { enabled: true },
  liveAlbum: { enabled: true, moderation: true },
  voiceBook: { enabled: true, maxDurationSeconds: 90 },
  rsvp: { enabled: true, collectAdults: true, collectChildren: true, collectDietaryNeeds: true },
};
