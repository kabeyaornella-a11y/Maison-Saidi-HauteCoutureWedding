import type { VenuesConfig } from '../../types/venues.types';

export const venuesConfig: VenuesConfig = {
  intro: {
    title: 'Les rendez-vous de la collection',
    lead: 'Deux instants, deux écrins, une seule et même promesse.',
    sub: 'Nous serions honorés de vous compter parmi nous pour célébrer cette journée.',
  },
  civil: {
    act: 'Premier acte',
    sectionTitle: 'La cérémonie civile',
    venueName: 'Mairie de Gennevilliers',
    description:
      'C’est dans l’élégance et l’émotion d’un engagement officiellement prononcé que débutera cette journée si précieuse.',
    dateLabel: '22 mai 2027',
    time: '13h00',
    address: '177 avenue Gabriel Péri, 92230 Gennevilliers',
    buttonLabel: 'Voir l’itinéraire',
  },
  blessing: {
    act: 'Deuxième acte',
    sectionTitle: 'La bénédiction nuptiale & la réception',
    venueName: 'Gardénia Réception',
    description:
      'Après avoir uni nos voix devant les hommes, nous recevrons la bénédiction de Dieu avant de poursuivre cette célébration à vos côtés.',
    secondaryDescription:
      'Nous aurons la joie de vous accueillir pour une soirée placée sous le signe de l’amour, du partage et de l’élégance.',
    dateLabel: '22 mai 2027',
    time: '15h00',
    address: '74 rue de Dampont, 95450 Us',
    buttonLabel: 'Rejoindre Gardénia Réception',
  },
};
