export type StoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  imageUrl?: string;
  imageAlt?: string;
};

export type StoryConfig = {
  title: string;
  subtitle: string;
  closingSentence: string;
  chapters: StoryChapter[];
};
