import type { RsvpConfig } from '../../types/rsvp.types';

export const rsvpConfig: RsvpConfig = {
  title: 'Votre accréditation',
  editionLabel: 'Édition privée — date',
  intro: 'Texte d’introduction du RSVP.',
  submitButtonLabel: 'Confirmer ma présence',
  successTitle: 'Merci, {{firstName}}',
  successBody: 'Message affiché si présence confirmée.',
  successBadge: 'Accréditation confirmée',
  declineTitle: 'Merci, {{firstName}}',
  declineBody: 'Message affiché en cas d’absence.',
  declineBadge: 'Réponse enregistrée',
  closeButtonLabel: 'Fermer',
};
