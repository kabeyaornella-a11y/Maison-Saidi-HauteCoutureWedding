import type { CloudinaryConfig } from '../types/media.types';

export type UploadResult = { url: string };

export function isUploadConfigured(config: CloudinaryConfig): boolean {
  return Boolean(config.cloudName && config.uploadPreset);
}

// Upload direct (non signé) vers Cloudinary. Le composant appelant ne dépend jamais
// du fournisseur : si Cloudinary est remplacé un jour, seul ce fichier change.
export async function uploadMedia(
  file: Blob,
  config: CloudinaryConfig,
  resourceType: 'image' | 'video' | 'auto' = 'auto',
): Promise<UploadResult> {
  if (!isUploadConfigured(config)) {
    throw new Error(
      'Envoi non configuré : ajoute un upload preset non signé dans cloudinary.config.ts.',
    );
  }

  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', config.uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${config.cloudName}/${resourceType}/upload`,
    { method: 'POST', body: form },
  );

  if (!response.ok) {
    throw new Error(`Échec de l’envoi (${response.status}).`);
  }

  const json = (await response.json()) as { secure_url: string };
  return { url: json.secure_url };
}

// Réduit la taille d'une image côté client avant envoi (économise data + stockage).
export async function compressImage(file: File, maxDimension = 1920, quality = 0.82): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob ?? file), 'image/jpeg', quality);
  });
}
