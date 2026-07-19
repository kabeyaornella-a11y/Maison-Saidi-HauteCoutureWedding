export type Venue = {
  act: string;
  sectionTitle: string;
  venueName: string;
  description: string;
  secondaryDescription?: string;
  dateLabel: string;
  time: string;
  address: string;
  mapUrl?: string;
  buttonLabel: string;
};

export type VenuesConfig = {
  intro: { title: string; lead: string; sub: string };
  civil: Venue;
  blessing: Venue;
};
