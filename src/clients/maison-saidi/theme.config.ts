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
  },
  fonts: {
    display: 'Cormorant Garamond',
    script: 'Chopin Script',
    body: 'Inter',
    // Police Google Fonts chargée dynamiquement (display + body).
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap',
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
