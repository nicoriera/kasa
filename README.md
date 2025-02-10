# React + Vite Template

Ce projet est un template minimaliste permettant de démarrer une application React avec Vite. Il intègre le Hot Module Replacement (HMR), quelques règles ESLint de base, ainsi que diverses fonctionnalités utiles pour le développement moderne.

## Fonctionnalités

- **Vite + React :** Configuration minimale pour un développement rapide avec HMR.
- **React Router :** Gestion centralisée du routage (voir `src/routes/index.jsx`).
- **Composants réutilisables :** Exemple avancé avec le composant **Caroussel** (`src/components/Caroussel.jsx`) pour afficher une galerie d'images.
- **CI/CD :** Configuration GitHub Actions pour installer les dépendances, exécuter les tests et builder le projet.
- **Déploiement sur GitHub Pages :** Déploiement facilité via la commande `npm run deploy` (voir section Déploiement).

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/nom-du-depot.git
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

## Utilisation en Développement

Pour lancer le serveur de développement avec Hot Module Replacement, exécutez :

```bash
npm run dev
```

## Déploiement

Le dossier généré pour la production sera `dist`.

## Déploiement sur GitHub Pages

Pour déployer l'application sur GitHub Pages, suivez ces étapes :

1. **Configurer le champ `homepage` dans votre `package.json` :**

   ```json
   {
     "homepage": "https://votre-utilisateur.github.io/nom-du-depot"
   }
   ```

2. **Installer le package `gh-pages` (si ce n'est pas déjà fait) :**

   ```bash
   npm install gh-pages --save-dev
   ```

3. **Déployer avec :**

   ```bash
   npm run deploy
   ```

Le script `deploy` construit l'application puis déploie le contenu du dossier `dist` sur GitHub Pages.

## Configuration CI/CD

Le projet inclut une configuration GitHub Actions (fichier `.github/workflows/main.yml`) qui permet d'automatiser :

- L'installation des dépendances.
- L'exécution du linter et des tests.
- La construction du projet.

## Structure du Projet

- **`src/` :** Contient les fichiers sources de l'application.
  - **`main.jsx` :** Point d'entrée de l'application qui rend le routeur.
  - **`routes/` :** Gestion du routage via React Router.
  - **`components/` :** Composants réutilisables, dont le composant **Caroussel**.
  - **`styles/` :** Feuilles de style (SCSS) de l'application.
- **`public/` :** Ressources statiques (images, icônes, etc.).
- **`README.md` :** Ce fichier.

## Ressources Supplémentaires

- [Documentation Vite](https://vitejs.dev/)
- [Documentation React](https://reactjs.org/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation GitHub Pages](https://pages.github.com/)
- [gh-pages sur npm](https://www.npmjs.com/package/gh-pages)

## License

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.
