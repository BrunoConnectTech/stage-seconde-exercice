# Exercice — Mise en forme CSS de l'application Pokémon

Dans cet exercice, l'application affiche déjà une liste de Pokémon (image + nom).
Ton objectif : ouvrir le fichier `frontend/style.css` et le remplir pour rendre l'affichage le plus beau possible, selon ton inspiration !

Bonne chance, et laisse parler ta créativité ! 🎮

---

## Sommaire

- [Structure de la page](#structure-de-la-page)
- [Mémo CSS — Les propriétés principales](#mémo-css--les-propriétés-principales)
  - [🎨 Couleurs et arrière-plan](#-couleurs-et-arrière-plan)
  - [✍️ Texte et police](#️-texte-et-police)
  - [📦 Taille et espacement (le modèle de boîte)](#-taille-et-espacement-le-modèle-de-boîte)
  - [🗂️ Mise en page avec Flexbox](#️-mise-en-page-avec-flexbox)
  - [🔲 Mise en page avec Grid](#-mise-en-page-avec-grid)
  - [✨ Effets visuels](#-effets-visuels)
  - [🖼️ Images](#️-images)
- [📋 Récapitulatif — Toutes les propriétés CSS](#-récapitulatif--toutes-les-propriétés-css)

---

## Structure de la page

Voici les éléments HTML que tu peux cibler en CSS :

| Sélecteur CSS  | Ce que c'est                             |
| -------------- | ---------------------------------------- |
| `body`         | Toute la page                            |
| `.titre`       | Le titre `<h1>` en haut de la page       |
| `.pokemonList` | La liste `<ul>` qui contient les Pokémon |
| `.pokemonItem` | Chaque carte `<li>` (un Pokémon)         |
| `.pokemonImg`  | L'image de chaque Pokémon                |
| `.pokemonName` | Le paragraphe avec le nom du Pokémon     |

---

## Mémo CSS — Les propriétés principales

### 🎨 Couleurs et arrière-plan

| Propriété          | À quoi ça sert                          | Exemple                              |
| ------------------ | --------------------------------------- | ------------------------------------ |
| `color`            | Couleur du texte                        | `color: red;` ou `color: #ff0000;`   |
| `background-color` | Couleur de fond d'un élément            | `background-color: #f0f0f0;`         |
| `background-image` | Image de fond d'un élément              | `background-image: url("fond.jpg");` |
| `background-size`  | Taille de l'image de fond               | `background-size: cover;`            |
| `opacity`          | Transparence (0 = invisible, 1 = plein) | `opacity: 0.8;`                      |

> 💡 Pour les couleurs, tu peux utiliser :
>
> - un nom anglais : `red`, `blue`, `gold`, `white`, `black`…
> - un code hexadécimal : `#ffcc00`
> - une valeur RGB : `rgb(255, 204, 0)`
>
> 🔗 Outils pour trouver des couleurs :
>
> - **[htmlcolorcodes.com](https://htmlcolorcodes.com/fr/)** — sélecteur interactif qui affiche le code hex et RGB en temps réel
> - **[colorhunt.co](https://colorhunt.co)** — palettes de couleurs harmonieuses prêtes à l'emploi, un clic pour copier le code hex

---

### ✍️ Texte et police

| Propriété         | À quoi ça sert                       | Exemple                           |
| ----------------- | ------------------------------------ | --------------------------------- |
| `font-family`     | Choisir la police de caractères      | `font-family: Arial, sans-serif;` |
| `font-size`       | Taille du texte                      | `font-size: 20px;`                |
| `font-weight`     | Épaisseur du texte (gras ou non)     | `font-weight: bold;`              |
| `font-style`      | Style du texte (italique ou non)     | `font-style: italic;`             |
| `text-align`      | Alignement du texte                  | `text-align: center;`             |
| `text-decoration` | Soulignement, barré…                 | `text-decoration: underline;`     |
| `text-transform`  | Majuscules / minuscules automatiques | `text-transform: uppercase;`      |
| `letter-spacing`  | Espace entre les lettres             | `letter-spacing: 2px;`            |
| `line-height`     | Hauteur entre les lignes             | `line-height: 1.5;`               |

---

### 📦 Taille et espacement (le modèle de boîte)

Chaque élément HTML est une **boîte**. Tu peux contrôler sa taille et ses espaces :

```
┌─────────────────────────────────┐  ← margin (espace extérieur)
│   ┌─────────────────────────┐   │
│   │  border (bordure)       │   │
│   │  ┌───────────────────┐  │   │
│   │  │ padding (coussin) │  │   │
│   │  │  ┌─────────────┐  │  │   │
│   │  │  │   contenu   │  │  │   │
│   │  │  └─────────────┘  │  │   │
│   │  └───────────────────┘  │   │
│   └─────────────────────────┘   │
└─────────────────────────────────┘
```

| Propriété       | À quoi ça sert                                    | Exemple                    |
| --------------- | ------------------------------------------------- | -------------------------- |
| `width`         | Largeur de l'élément                              | `width: 200px;`            |
| `height`        | Hauteur de l'élément                              | `height: 150px;`           |
| `max-width`     | Largeur maximale (l'élément ne dépasse pas)       | `max-width: 100%;`         |
| `padding`       | Espace entre le contenu et la bordure (intérieur) | `padding: 10px;`           |
| `margin`        | Espace autour de l'élément (extérieur)            | `margin: 20px auto;`       |
| `border`        | Bordure autour de l'élément                       | `border: 2px solid black;` |
| `border-radius` | Arrondir les coins                                | `border-radius: 10px;`     |

> 💡 `margin: 0 auto;` permet de **centrer** un élément horizontalement dans sa page.

---

### 🗂️ Mise en page avec Flexbox

`display: flex` est la façon moderne de **placer des éléments côte à côte** ou de les aligner facilement.

| Propriété         | À quoi ça sert                                 | Valeurs courantes                       |
| ----------------- | ---------------------------------------------- | --------------------------------------- |
| `display`         | Active le mode d'affichage                     | `flex`, `block`, `inline`               |
| `flex-direction`  | Sens des éléments                              | `row` (horizontal), `column` (vertical) |
| `justify-content` | Alignement sur l'axe principal (gauche/droite) | `center`, `space-between`, `flex-start` |
| `align-items`     | Alignement sur l'axe secondaire (haut/bas)     | `center`, `flex-start`, `flex-end`      |
| `flex-wrap`       | Retour à la ligne automatique si ça déborde    | `wrap`, `nowrap`                        |
| `gap`             | Espace entre les éléments flex                 | `gap: 20px;`                            |

```css
.conteneur {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
```

> 💡 `flex-wrap: wrap` permet aux éléments de **passer à la ligne** automatiquement s'il n'y a plus de place.

---

### 🔲 Mise en page avec Grid

`display: grid` permet de créer des **mises en page en colonnes et lignes**, comme un tableau.

| Propriété               | À quoi ça sert                                       | Exemple                                                         |
| ----------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| `display: grid`         | Active le mode grille                                | `display: grid;`                                                |
| `grid-template-columns` | Définit le nombre et la taille des colonnes          | `grid-template-columns: 200px 200px 200px;`                     |
| `grid-template-columns` | Avec `repeat` pour répéter                           | `grid-template-columns: repeat(3, 200px);`                      |
| `grid-template-columns` | Avec `auto-fill` pour s'adapter automatiquement      | `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));` |
| `grid-template-rows`    | Définit la hauteur des lignes                        | `grid-template-rows: 100px auto;`                               |
| `gap`                   | Espace entre les cellules                            | `gap: 16px;`                                                    |
| `justify-items`         | Alignement horizontal du contenu dans chaque cellule | `justify-items: center;`                                        |
| `align-items`           | Alignement vertical du contenu dans chaque cellule   | `align-items: center;`                                          |

```css
.conteneur {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
```

> 💡 `minmax(150px, 1fr)` signifie : chaque colonne fait **au moins 150px** et s'étire pour remplir l'espace disponible. Le nombre de colonnes s'adapte automatiquement à la largeur de l'écran.

**Flexbox vs Grid — quand utiliser lequel ?**

| Flexbox                                                 | Grid                                             |
| ------------------------------------------------------- | ------------------------------------------------ |
| Aligner des éléments **sur une seule ligne ou colonne** | Organiser des éléments **en lignes ET colonnes** |
| Menu de navigation, barre d'icônes                      | Galerie d'images, tableau de cartes              |

---

### ✨ Effets visuels

| Propriété    | À quoi ça sert                               | Exemple                                     |
| ------------ | -------------------------------------------- | ------------------------------------------- |
| `box-shadow` | Ajouter une ombre autour d'un élément        | `box-shadow: 2px 4px 10px rgba(0,0,0,0.2);` |
| `transition` | Animer un changement de style en douceur     | `transition: all 0.3s ease;`                |
| `cursor`     | Changer le curseur de la souris au survol    | `cursor: pointer;`                          |
| `transform`  | Déplacer, agrandir, faire pivoter un élément | `transform: scale(1.1);`                    |

```css
.carte {
  transition: all 0.3s ease;
}

.carte:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
```

> 💡 `:hover` est une **pseudo-classe** : le style s'applique uniquement quand la souris passe sur l'élément.

---

### 🖼️ Images

| Propriété       | À quoi ça sert                                      | Exemple               |
| --------------- | --------------------------------------------------- | --------------------- |
| `width`         | Largeur de l'image                                  | `width: 120px;`       |
| `height`        | Hauteur de l'image                                  | `height: 120px;`      |
| `object-fit`    | Comment l'image remplit son espace sans se déformer | `object-fit: cover;`  |
| `border-radius` | Rendre l'image ronde                                | `border-radius: 50%;` |

---

## 📋 Récapitulatif — Toutes les propriétés CSS

| Propriété               | Catégorie      | À quoi ça sert                                             |
| ----------------------- | -------------- | ---------------------------------------------------------- |
| `color`                 | Couleur        | Couleur du texte                                           |
| `background-color`      | Couleur        | Couleur de fond                                            |
| `background-image`      | Couleur        | Image de fond                                              |
| `background-size`       | Couleur        | Taille de l'image de fond                                  |
| `opacity`               | Couleur        | Transparence d'un élément (0 à 1)                          |
|                         |                |                                                            |
| `font-family`           | Texte          | Police de caractères                                       |
| `font-size`             | Texte          | Taille du texte                                            |
| `font-weight`           | Texte          | Épaisseur du texte (`bold`, `normal`, valeur numérique)    |
| `font-style`            | Texte          | Style du texte (`italic`, `normal`)                        |
| `text-align`            | Texte          | Alignement du texte (`left`, `center`, `right`)            |
| `text-decoration`       | Texte          | Soulignement, barré (`underline`, `none`…)                 |
| `text-transform`        | Texte          | Casse automatique (`uppercase`, `lowercase`, `capitalize`) |
| `letter-spacing`        | Texte          | Espace entre les lettres                                   |
| `line-height`           | Texte          | Hauteur entre les lignes                                   |
|                         |                |                                                            |
| `width`                 | Taille         | Largeur d'un élément                                       |
| `height`                | Taille         | Hauteur d'un élément                                       |
| `max-width`             | Taille         | Largeur maximale                                           |
|                         |                |                                                            |
| `padding`               | Espacement     | Espace intérieur (entre le contenu et la bordure)          |
| `margin`                | Espacement     | Espace extérieur (autour de l'élément)                     |
|                         |                |                                                            |
| `border`                | Bordure        | Bordure autour d'un élément (`épaisseur style couleur`)    |
| `border-radius`         | Bordure        | Arrondir les coins                                         |
|                         |                |                                                            |
| `display`               | Mise en page   | Mode d'affichage (`block`, `flex`, `grid`, `inline`…)      |
|                         |                |                                                            |
| `flex-direction`        | Flexbox        | Sens des éléments flex (`row`, `column`)                   |
| `justify-content`       | Flexbox / Grid | Alignement horizontal (`center`, `space-between`…)         |
| `align-items`           | Flexbox / Grid | Alignement vertical (`center`, `flex-start`…)              |
| `flex-wrap`             | Flexbox        | Retour à la ligne automatique (`wrap`, `nowrap`)           |
| `gap`                   | Flexbox / Grid | Espace entre les éléments                                  |
|                         |                |                                                            |
| `grid-template-columns` | Grid           | Nombre et taille des colonnes                              |
| `grid-template-rows`    | Grid           | Hauteur des lignes                                         |
| `justify-items`         | Grid           | Alignement horizontal du contenu dans chaque cellule       |
|                         |                |                                                            |
| `box-shadow`            | Effets         | Ombre autour d'un élément                                  |
| `transition`            | Effets         | Animation douce lors d'un changement de style              |
| `transform`             | Effets         | Déplacer, agrandir, faire pivoter (`scale`, `rotate`…)     |
| `cursor`                | Effets         | Apparence du curseur au survol (`pointer`, `default`…)     |
|                         |                |                                                            |
| `object-fit`            | Image          | Ajustement de l'image dans son espace (`cover`, `contain`) |
