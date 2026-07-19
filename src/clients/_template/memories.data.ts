import type { MemoriesConfig } from '../../types/memories.types';

export const memoriesConfig: MemoriesConfig = {
  sectionTitle: 'Vos empreintes dans notre histoire',
  intro: 'Phrase d’introduction de la section souvenirs.',
  playlist: {
    title: 'La bande-son de notre histoire',
    intro: 'Texte d’intro playlist.',
    buttonLabel: 'Ajouter une chanson',
    confirmation: 'Message de confirmation.',
  },
  liveAlbum: {
    title: 'L’album photo live',
    intro: 'Texte d’intro album live.',
    captureButtonLabel: 'Prendre une photo',
    uploadButtonLabel: 'Ajouter depuis mon téléphone',
    confirmation: 'Message de confirmation.',
  },
  voiceBook: {
    title: 'Le livre des voix',
    intro: 'Texte d’intro livre des voix.',
    recordButtonLabel: 'Enregistrer un message',
    confirmation: 'Message de confirmation.',
  },
};
