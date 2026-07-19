import type { SeatingPlan } from '../../types/seating.types';

export const seatingPlanData: SeatingPlan = {
  roomName: 'Nom de la salle',
  tables: [
    { id: 'table-1', name: 'Table 1', number: 1, capacity: 8, x: 30, y: 40 },
    { id: 'table-2', name: 'Table 2', number: 2, capacity: 8, x: 70, y: 40 },
  ],
  guests: [
    { id: 'guest-1', firstName: 'Prénom', lastName: 'Nom', displayName: 'Prénom N.', tableId: 'table-1', groupLabel: 'Famille' },
  ],
};
