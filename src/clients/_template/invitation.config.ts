// GABARIT — copie ce dossier entier (src/clients/_template) vers src/clients/{id-du-client}
// puis remplace chaque valeur ci-dessous. Rien d'autre à toucher dans le code.
import type { InvitationConfig } from '../../types/invitation.types';

export const invitationConfig: InvitationConfig = {
  brand: {
    name: 'Nom de la Maison',                    // ex: "Maison Saïdi"
    edition: 'Édition privée',
    collection: 'Collection Saison Année',        // ex: "Printemps 2027"
    openingText: 'Phrase d’ouverture de l’écran d’accueil.',
    monogramAlt: 'Monogramme des initiales',      // texte alternatif de l'image du monogramme
    introAriaLabel: 'Ouverture de l’invitation',
    metaDescription: 'Description courte pour le partage sur les réseaux / Google',
    pageTitle: 'Titre affiché dans l’onglet du navigateur',
  },
  couple: {
    displayNames: 'Prénom & Prénom',
    weddingDate: '2027-01-01T00:00:00+02:00',     // ISO, avec le bon fuseau horaire
    weddingDateLabel: '1 janvier 2027',
    heroPhotoAlt: 'Prénom et Prénom',
  },
  editorial: {
    invitationSentence: 'ont l’honneur de vous convier à la célébration de leur mariage',
    editionLabel: 'L’édition du mariage',
  },
  hands: {
    caption: 'Une phrase courte et émotionnelle.',
    photoAlt: 'Les mains de Prénom et Prénom',
  },
  countdown: {
    title: 'Titre du compte à rebours',
    sentence: 'Phrase d’accompagnement du compte à rebours.',
    labels: ['Jours', 'Heures', 'Minutes', 'Secondes'],
  },
  verses: [
    { text: 'Première citation.', reference: 'Référence 1' },
    { text: 'Deuxième citation.', reference: 'Référence 2' },
  ],
};
