// Illustrations légères en trait (aucune photographie), conformes au cahier des charges :
// "tracé encre bleu nuit ou champagne". Génériques, réutilisables pour tout client.
export function CivilVenueIcon() {
  return (
    <svg viewBox="0 0 200 160" fill="none" aria-hidden="true">
      <path d="M20 150h160M30 150V70l70-45 70 45v80" stroke="currentColor" strokeWidth="1.4" />
      <path d="M45 150V85M65 150V85M85 150V85M105 150V85M125 150V85M145 150V85" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M100 25v15M85 45l15-13 15 13" stroke="currentColor" strokeWidth="1.4" />
      <rect x="88" y="110" width="24" height="40" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ReceptionVenueIcon() {
  return (
    <svg viewBox="0 0 200 160" fill="none" aria-hidden="true">
      <path
        d="M100 40c-14 18-34 24-34 46a34 34 0 0068 0c0-22-20-28-34-46z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M100 86v64M60 150h80" stroke="currentColor" strokeWidth="1.2" />
      <path d="M70 130c8-6 20-6 30 0M100 130c10-6 22-6 30 0" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="24" r="6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
