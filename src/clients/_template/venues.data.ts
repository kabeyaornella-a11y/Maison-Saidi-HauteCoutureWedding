import type { VenuesConfig } from '../../types/venues.types';

export const venuesConfig: VenuesConfig = {
  intro: {
    title: 'Titre de la section lieux',
    lead: 'Phrase d’introduction (police signature).',
    sub: 'Deuxième phrase d’introduction.',
  },
  civil: {
    act: 'Premier acte',
    sectionTitle: 'La cérémonie civile',
    venueName: 'Nom de la mairie',
    description: 'Texte d’introduction à la cérémonie civile.',
    dateLabel: 'Date',
    time: '[Heure à confirmer]',
    address: '[Adresse à intégrer]',
    buttonLabel: 'Voir l’itinéraire',
  },
  blessing: {
    act: 'Deuxième acte',
    sectionTitle: 'La bénédiction & la réception',
    venueName: 'Nom du lieu de réception',
    description: 'Texte sur la bénédiction.',
    secondaryDescription: 'Texte sur la réception.',
    dateLabel: 'Date',
    time: '[Heure]',
    address: '[Adresse à intégrer]',
    buttonLabel: 'Rejoindre le lieu de réception',
  },
};
