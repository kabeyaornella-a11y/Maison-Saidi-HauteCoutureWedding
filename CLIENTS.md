# Système multi-client — Eventia Signature

Ce projet est un **socle unique** qui sert plusieurs mariages. Chaque client a son propre
dossier de données ; le code des composants ne change jamais.

## Comment ça marche

1. Chaque client vit dans `src/clients/{id}/` (config texte, couleurs, polices, médias, plan de table)
   et `public/clients/{id}/assets/` (photos, voiles, polices custom, monogramme).
2. Au démarrage, l'app lit la variable d'environnement `VITE_CLIENT_ID` et charge
   **uniquement** le dossier client correspondant (`src/clients/{id}/index.ts`).
3. Sur Netlify, chaque mariage = **un site Netlify séparé**, connecté au même dépôt Git,
   avec une seule variable différente : `VITE_CLIENT_ID=nom-du-client`.
   → Un seul code à maintenir, autant de sites que de mariages.

## Ajouter un nouveau client (ex: "leila-nassim")

1. Copier le dossier gabarit :
   - `src/clients/_template/` → `src/clients/leila-nassim/`
   - `public/clients/_template/assets/` → `public/clients/leila-nassim/assets/`
2. Remplacer les valeurs dans les 5 fichiers copiés (`invitation.config.ts`, `media.config.ts`,
   `theme.config.ts`, `features.config.ts`, `seating.data.ts`). Chaque champ est commenté.
3. Déposer les vrais visuels dans `public/clients/leila-nassim/assets/` en respectant les
   mêmes sous-dossiers (`brand/`, `backgrounds/`, `photos/`, `overlays/`, `fonts/`).
4. Dans `media.config.ts` du nouveau client, changer `CLIENT_ID` en `'leila-nassim'`.
5. Créer un nouveau site Netlify pointant sur ce même dépôt, avec la variable
   `VITE_CLIENT_ID=leila-nassim` dans Site settings → Environment variables.
6. Déployer. Aucun fichier de composant (`.tsx`) n'a besoin d'être touché.

## Ce qui est déjà 100% variable par client

- Tous les textes (aucun texte n'est écrit en dur dans un composant)
- Toutes les couleurs (variables CSS injectées au runtime depuis `theme.config.ts`)
- Toutes les polices, y compris une police signature custom chargée dynamiquement
- Tous les chemins d'images (dossier `assets/` séparé par client)
- Le titre d'onglet et la meta description (SEO / partage) injectés au runtime
- Le plan de table (données invités/tables propres à chaque mariage)
- Les fonctionnalités activables (`features.config.ts` : playlist, cadeaux, album live…)

## Ce qui reste à faire à la main pour chaque client

- Vérifier la licence de toute police custom réutilisée (Chopin Script ou autre) avant de
  la redéployer sur un site commercial pour un autre couple.
- Les futures sections (Notre histoire, lieux, programme, dress code, RSVP) devront suivre
  la même règle : zéro texte en dur dans le `.tsx`, tout dans `invitation.config.ts`.

## Nommage interdit (rappel du cahier des charges)

Jamais de `Fix`, `V2`, `New`, `Corrected`, `Old`, `Temp` dans un nom de fichier ou de client.
Un client obsolète est supprimé, pas renommé.
