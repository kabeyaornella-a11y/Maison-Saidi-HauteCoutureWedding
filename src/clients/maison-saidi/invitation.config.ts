import type { InvitationConfig } from '../../types/invitation.types';

export const invitationConfig: InvitationConfig = {
  brand: {
    name: 'Maison Saïdi',
    edition: 'Édition privée',
    collection: 'Printemps 2027',
    openingText:
      'La Maison Saïdi vous ouvre les portes de sa plus précieuse collection : Printemps 2027.',
    monogramAlt: 'Monogramme A et S',
    introAriaLabel: 'Ouverture de l’invitation Maison Saïdi',
    metaDescription: 'Maison Saïdi — Collection Printemps 2027',
    pageTitle: 'Maison Saïdi — Saïmira & Aindi',
  },
  couple: {
    displayNames: 'Saïmira & Aindi',
    weddingDate: '2027-05-22T00:00:00+02:00',
    weddingDateLabel: '22 mai 2027',
    heroPhotoAlt: 'Saïmira et Aindi',
    heroTagline: 'Un amour qui traverse le temps.',
  },
  editorial: {
    invitationSentence: 'ont l’honneur de vous convier à la célébration de leur mariage',
    editionLabel: 'L’édition du mariage',
  },
  hands: {
    caption: 'Une promesse. Une alliance. Une histoire pour toujours.',
    photoAlt: 'Les mains de Saïmira et Aindi',
  },
  countdown: {
    title: 'Avant le lever de rideau',
    sentence:
      'Chaque seconde nous rapproche de l’instant où notre histoire défilera sous vos yeux.',
    labels: ['Jours', 'Heures', 'Minutes', 'Secondes'],
  },
  verses: [
    {
      text: 'Tout don excellent et tout cadeau parfait viennent d’en haut.',
      reference: 'Jacques 1:17',
    },
    {
      text: 'Celui qui trouve une femme trouve le bonheur ; c’est une grâce qu’il obtient de l’Éternel.',
      reference: 'Proverbes 18:22',
    },
  ],
};
