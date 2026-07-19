import type { MemoriesConfig } from '../../types/memories.types';

export const memoriesConfig: MemoriesConfig = {
  sectionTitle: 'Vos empreintes dans notre histoire',
  intro:
    'Notre histoire s’est construite à travers des souvenirs, des voix, des images et des mélodies. Le jour de notre mariage, nous vous invitons à y laisser votre propre empreinte.',
  playlist: {
    title: 'La bande-son de notre histoire',
    intro:
      'Ajoutez la chanson qui vous fait penser à nous, celle qui vous donne envie de danser ou celle que vous aimeriez entendre accompagner cette célébration.',
    buttonLabel: 'Ajouter une chanson',
    confirmation: 'Votre mélodie a rejoint la sélection de la Maison Saïdi.',
  },
  liveAlbum: {
    title: 'L’album photo live',
    intro:
      'Capturez les instants que nous ne verrons peut-être pas : les éclats de rire, les regards complices et tous ces petits moments qui rendront cette journée inoubliable.',
    captureButtonLabel: 'Prendre une photo',
    uploadButtonLabel: 'Ajouter depuis mon téléphone',
    confirmation: 'Votre souvenir a rejoint notre album. Merci d’avoir capturé cet instant pour nous.',
  },
  voiceBook: {
    title: 'Le livre des voix',
    intro:
      'Certaines émotions méritent d’être conservées dans la voix de ceux qui les ont ressenties. Laissez-nous un message que nous pourrons réécouter bien après cette journée.',
    recordButtonLabel: 'Enregistrer un message',
    confirmation: 'Votre voix fait désormais partie des souvenirs de notre mariage.',
  },
};
