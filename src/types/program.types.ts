export type ProgramStep = { time: string; title: string; description: string };

export type ProgramConfig = {
  title: string;
  subtitle: string;
  steps: ProgramStep[];
  closingSentence: string;
};
