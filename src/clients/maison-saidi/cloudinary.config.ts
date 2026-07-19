import type { CloudinaryConfig } from '../../types/media.types';

// Cloud name confirmé (voir compte Cloudinary Eventia Signature).
// uploadPreset : à créer une seule fois dans Cloudinary > Settings > Upload > Upload presets
// > Add upload preset > Signing mode "Unsigned", puis copier son nom ici. Vide = upload désactivé
// proprement (aucune erreur visible côté invité, juste la fonctionnalité masquée).
export const cloudinaryConfig: CloudinaryConfig = {
  cloudName: 'didid8vcu',
  uploadPreset: '',
};
