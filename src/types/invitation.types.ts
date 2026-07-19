export type BibleVerseData = { text: string; reference: string };

export type InvitationConfig = {
  brand: {
    name: string;
    edition: string;
    collection: string;
    openingText: string;
    monogramAlt: string;
    introAriaLabel: string;
    metaDescription: string;
    pageTitle: string;
  };
  couple: {
    displayNames: string;
    weddingDate: string;
    weddingDateLabel: string;
    heroPhotoAlt: string;
    heroTagline: string;
  };
  editorial: {
    invitationSentence: string;
    editionLabel: string;
  };
  hands: {
    caption: string;
    photoAlt: string;
  };
  countdown: {
    title: string;
    sentence: string;
    labels: [string, string, string, string];
  };
  verses: BibleVerseData[];
};
