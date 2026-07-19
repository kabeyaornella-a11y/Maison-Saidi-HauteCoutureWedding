// GABARIT — 2 à 5 chapitres, chacun avec un titre, un mini-titre et 1 à 4 paragraphes.
// image / imageAlt sont optionnels (le chapitre s'affiche en texte seul si absents).
import type { StoryConfig } from '../../types/story.types';

export const storyConfig: StoryConfig = {
  title: 'Notre histoire',
  subtitle: 'Sous-titre en police signature',
  closingSentence: 'Phrase de conclusion de la section.',
  chapters: [
    {
      id: 'chapitre-1',
      eyebrow: 'Petit intitulé',
      title: 'Titre du chapitre',
      paragraphs: ['Premier paragraphe.', 'Second paragraphe.'],
    },
  ],
};
