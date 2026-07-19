export type RsvpConfig = {
  title: string;
  editionLabel: string;
  intro: string;
  submitButtonLabel: string;
  successTitle: string;
  successBody: string;
  successBadge: string;
  declineTitle: string;
  declineBody: string;
  declineBadge: string;
  closeButtonLabel: string;
};

export type RsvpFormValues = {
  firstName: string;
  lastName: string;
  attendance: 'accepted' | 'declined' | '';
  attendanceScope: 'civil' | 'blessing-reception' | 'full-day' | '';
  adults: string;
  children: string;
  companionName: string;
  dietaryNeeds: string;
  message: string;
};
