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
  intro: {
    surtitle: string;
    invitationPhrase: string;
    enterLabel: string;
  };
  presentation: {
    presents: string;
    collectionType: string;
    collectionName: string;
    season: string;
    presentationLabel: string;
    accreditationText: string;
    invitationText: string;
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
  story: {
    surtitle: string;
  };
  venues: {
    surtitle: string;
  };
  program: {
    surtitle: string;
    title: string;
  };
  finalScene: {
    dateLabel: string;
    phrase: string;
    signatureLine: string;
    footer: string;
  };
};
