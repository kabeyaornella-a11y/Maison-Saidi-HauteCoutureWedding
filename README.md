# Eventia Signature — socle d'invitation multi-client

Socle Vite + React + TypeScript réutilisable pour plusieurs mariages.
Voir **CLIENTS.md** pour ajouter un nouveau client et comprendre le système.

- Textes, couleurs, polices, médias et plan de table : `src/clients/{id}/`
- Assets (photos, voiles, polices) : `public/clients/{id}/assets/`
- Client actif choisi via la variable d'environnement `VITE_CLIENT_ID`

## Lancer en local
- `npm install`
- `VITE_CLIENT_ID=maison-saidi npm run dev` (ou définir la variable dans un fichier `.env.local`)
- `npm run build`

Ne jamais créer de composants `V2`, `Final` ou `Fix`. Modifier le composant source et supprimer le code obsolète.
