import type { InvitationConfig } from '../types/invitation.types';
import type { MediaConfig, ThemeConfig, FeaturesConfig, CloudinaryConfig } from '../types/media.types';
import type { SeatingPlan } from '../types/seating.types';
import type { StoryConfig } from '../types/story.types';
import type { VenuesConfig } from '../types/venues.types';
import type { ProgramConfig } from '../types/program.types';
import type { DressCodeConfig } from '../types/dresscode.types';
import type { GiftsConfig } from '../types/gifts.types';
import type { MemoriesConfig } from '../types/memories.types';
import type { RsvpConfig } from '../types/rsvp.types';

export type ClientBundle = {
  invitationConfig: InvitationConfig;
  mediaConfig: MediaConfig;
  themeConfig: ThemeConfig;
  featuresConfig: FeaturesConfig;
  cloudinaryConfig: CloudinaryConfig;
  seatingPlanData: SeatingPlan;
  storyConfig: StoryConfig;
  venuesConfig: VenuesConfig;
  programConfig: ProgramConfig;
  dressCodeConfig: DressCodeConfig;
  giftsConfig: GiftsConfig;
  memoriesConfig: MemoriesConfig;
  rsvpConfig: RsvpConfig;
};

// Chaque sous-dossier de src/clients/ doit exporter un index.ts (voir src/clients/_template).
// import.meta.glob permet à Vite de ne charger QUE le chunk du client actif : les autres
// clients présents dans le repo ne sont jamais téléchargés par le navigateur.
const clientModules = import.meta.glob('../clients/*/index.ts') as Record<
  string,
  () => Promise<ClientBundle>
>;

export const DEFAULT_CLIENT_ID = 'maison-saidi';

export function getActiveClientId(): string {
  return import.meta.env.VITE_CLIENT_ID?.trim() || DEFAULT_CLIENT_ID;
}

export async function loadClient(): Promise<ClientBundle> {
  const clientId = getActiveClientId();
  const path = `../clients/${clientId}/index.ts`;
  const loader = clientModules[path];

  if (!loader) {
    const available = Object.keys(clientModules)
      .map((p) => p.replace('../clients/', '').replace('/index.ts', ''))
      .filter((id) => id !== '_template')
      .join(', ');
    throw new Error(
      `Client inconnu : "${clientId}". Vérifie la variable VITE_CLIENT_ID sur Netlify ` +
        `et le dossier src/clients/${clientId}/. Clients disponibles : ${available}.`,
    );
  }

  return loader();
}
