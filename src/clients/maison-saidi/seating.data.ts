import type { SeatingPlan } from '../../types/seating.types';

/**
 * Données de démonstration.
 * Remplacer uniquement ce fichier (ou le générer depuis un CSV/Excel) pour un autre mariage.
 */
export const seatingPlanData: SeatingPlan = {
  roomName: 'Le Grand Salon',
  tables: [
    { id: 'table-1', name: 'Table 1', number: 1, capacity: 8, x: 22, y: 34 },
    { id: 'table-2', name: 'Table 2', number: 2, capacity: 8, x: 50, y: 27 },
    { id: 'table-3', name: 'Table 3', number: 3, capacity: 8, x: 78, y: 34 },
    { id: 'table-4', name: 'Table 4', number: 4, capacity: 8, x: 32, y: 68 },
    { id: 'table-5', name: 'Table 5', number: 5, capacity: 8, x: 68, y: 68 },
  ],
  guests: [
    { id: 'guest-1', firstName: 'Ornella', lastName: 'M.', displayName: 'Ornella M.', tableId: 'table-4', groupLabel: 'Famille des mariés' },
    { id: 'guest-2', firstName: 'Chelton', lastName: 'M.', displayName: 'Chelton M.', tableId: 'table-4', groupLabel: 'Famille des mariés' },
    { id: 'guest-3', firstName: 'Imany', lastName: 'M.', displayName: 'Imany M.', tableId: 'table-4', groupLabel: 'Famille des mariés' },
    { id: 'guest-4', firstName: 'Ezekiel', lastName: 'M.', displayName: 'Ezekiel M.', tableId: 'table-4', groupLabel: 'Famille des mariés' },
  ],
};
