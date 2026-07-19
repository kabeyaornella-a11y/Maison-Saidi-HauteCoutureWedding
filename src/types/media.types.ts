export type MediaConfig = {
  brand: { monogram: string };
  intro: { background: string };
  hero: {
    photo: string;
    veilTop: string;
    silkIvory: string;
    silkBlueIvory: string;
  };
  hands: { photo: string };
  countdown: { background: string };
  verses: { first: string };
  story: { cover: string };
  venues: { background: string };
  illustrations: { mairie: string; gardenia: string };
  program: { cover: string };
};

export type ThemeConfig = {
  colors: {
    navyDeep: string;
    navy: string;
    blue: string;
    steelBlue: string;
    iceBlue: string;
    champagne: string;
    champagneLight: string;
    ivory: string;
    ivoryLight: string;
    black: string;
    white: string;
  };
  fonts: {
    display: string;
    script: string;
    body: string;
    googleFontsUrl?: string;
    scriptFontFile?: string;
  };
  layout: {
    maxWidth: string;
    sectionSpacing: string;
    mobilePadding: string;
    desktopPadding: string;
  };
};

export type FeaturesConfig = {
  music: { enabled: boolean };
  playlist: { enabled: boolean };
  gifts: { enabled: boolean };
  liveAlbum: { enabled: boolean; moderation: boolean };
  voiceBook: { enabled: boolean; maxDurationSeconds: number };
  rsvp: {
    enabled: boolean;
    collectAdults: boolean;
    collectChildren: boolean;
    collectDietaryNeeds: boolean;
  };
};

export type CloudinaryConfig = {
  cloudName: string;
  // Preset non signé créé manuellement dans Cloudinary (Settings > Upload > Add upload preset,
  // signing mode "Unsigned"). Laisser vide désactive proprement les envois (aucun crash).
  uploadPreset: string;
};
