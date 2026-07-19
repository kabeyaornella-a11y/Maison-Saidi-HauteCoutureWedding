export type SeatingGuest = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  tableId: string;
  groupLabel?: string;
};

export type SeatingTable = {
  id: string;
  name: string;
  number: number;
  capacity: number;
  x: number;
  y: number;
};

export type SeatingPlan = {
  roomName: string;
  tables: SeatingTable[];
  guests: SeatingGuest[];
};
