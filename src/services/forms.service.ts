// Soumission vers Netlify Forms. Nécessite que le formulaire statique correspondant
// existe dans index.html (Netlify détecte les formulaires au build, pas côté client).
function encode(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export async function submitNetlifyForm(
  formName: string,
  data: Record<string, string>,
): Promise<void> {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...data }),
  });

  if (!response.ok) {
    throw new Error(`Échec de l’envoi du formulaire "${formName}" (${response.status}).`);
  }
}
