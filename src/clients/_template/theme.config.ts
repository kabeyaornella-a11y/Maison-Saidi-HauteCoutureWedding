import type { ThemeConfig } from '../../types/media.types';

export const themeConfig: ThemeConfig = {
  colors: {
    navyDeep: '#050B1E',
    navy: '#193060',
    blue: '#315381',
    steelBlue: '#859FC0',
    iceBlue: '#CEE0F4',
    champagne: '#C6A66B',
    champagneLight: '#D8C49A',
    ivory: '#F7F2EA',
    ivoryLight: '#FBF8F3',
    black: '#080808',
    white: '#FFFFFF',
    textDark: '#3A3029',
    textSecondary: '#75695D',
    warmWhite: '#FFFDF8',
  },
  fonts: {
    display: 'Cormorant Garamond',   // titres
    script: 'Nom de la police signature',   // prénoms, dates, citations
    body: 'Inter',                   // texte courant
    // Laisse vide ('') si tu utilises uniquement des polices Google Fonts standards.
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=...',
    // Chemin vers un fichier .otf/.woff2 custom si la police signature n'est pas sur Google Fonts.
    scriptFontFile: '',
  },
  layout: {
    maxWidth: '1200px',
    sectionSpacing: 'clamp(5rem, 12vw, 10rem)',
    mobilePadding: '1.25rem',
    desktopPadding: '2rem',
  },
};
