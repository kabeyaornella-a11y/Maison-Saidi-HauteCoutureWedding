export type MemoriesConfig = {
  sectionTitle: string;
  intro: string;
  playlist: {
    title: string;
    intro: string;
    buttonLabel: string;
    confirmation: string;
  };
  liveAlbum: {
    title: string;
    intro: string;
    captureButtonLabel: string;
    uploadButtonLabel: string;
    confirmation: string;
  };
  voiceBook: {
    title: string;
    intro: string;
    recordButtonLabel: string;
    confirmation: string;
  };
};
