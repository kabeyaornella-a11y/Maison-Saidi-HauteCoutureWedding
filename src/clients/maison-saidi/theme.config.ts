import type { ThemeConfig } from '../../types/media.types';

export const themeConfig: ThemeConfig = {
  colors: {
    navyDeep: '#07162F',
    navy: '#0D2346',
    blue: '#315381',
    steelBlue: '#859FC0',
    iceBlue: '#CEE0F4',
    champagne: '#C7A15A',
    champagneLight: '#E2C88F',
    ivory: '#F7F0E5',
    ivoryLight: '#FFF9F0',
    black: '#080808',
    white: '#FFFFFF',
    textDark: '#3A3029',
    textSecondary: '#75695D',
    warmWhite: '#FFFDF8',
  },
  fonts: {
    display: 'Cormorant Garamond',
    script: 'Chopin Script',
    body: 'Montserrat',
    // Police Google Fonts chargée dynamiquement (script secondaire + corps de texte).
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Montserrat:wght@400;500;600&display=swap',
    // Police custom (signature) chargée dynamiquement via FontFace API.
    scriptFontFile: '/clients/maison-saidi/assets/fonts/ChopinScript.otf',
  },
  layout: {
    maxWidth: '1200px',
    sectionSpacing: 'clamp(5rem, 12vw, 10rem)',
    mobilePadding: '1.25rem',
    desktopPadding: '2rem',
  },
};
