# BourseEnVrai

Site statique (HTML/CSS/JS), sans dépendance externe, sans pub, sans cookie, sans stockage navigateur.

## Contenu à modifier
- `data/brokers.js` : courtiers, frais, offres, liens et codes de parrainage (champ `affiliate`)
- `data/site.js` : ton nom, ton lien TikTok, ta présentation, ta photo (`assets/photo.jpg`)
- `data/formation.js`, `data/indices.js`, `data/alt.js` : formations, indices, alternatifs

## Déploiement (GitHub Pages)
1. Crée un dépôt public sur github.com (par exemple `bourseenvrai`). GitHub Pages est gratuit pour les dépôts publics.
2. Envoie tout le contenu du dossier à la racine du dépôt (le dossier caché `.github` compris).
3. Settings > Pages > Source : branche `main`, dossier `/ (root)`. Le site est en ligne au bout d'une à deux minutes.

## Mettre à jour la voix des vidéos
`scripts/gen_voix.py` génère les voix (voix neuronale, à lancer sur ton ordinateur), puis `scripts/build_audio.py` reconstruit les fichiers audio.

## Sécurité : être le seul à pouvoir modifier
1. Active l'authentification à deux facteurs sur ton compte GitHub.
2. Ne donne l'accès « collaborateur » à personne (Settings > Collaborators).
3. Protège `main` (Settings > Branches : exiger une pull request, interdire le force-push).
4. Le fichier `.github/CODEOWNERS` te désigne seul relecteur (`@brabantauguste-coder`).

Le site n'envoie aucune requête vers un tiers (CSP stricte dans `index.html`).
