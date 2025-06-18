# sncfconnect-stage-app-pokemon
Application web sur les Pokemon pour le stage de seconde.

Url du projet sur github : https://github.com/BrunoConnectTech/stage-seconde-exercice.git

# Installation de poste

## Installation de git sur Windows :

* https://git-scm.com/downloads/win
* Normalement vos ordinateurs sous Windows sont en x64 donc télécharger la version https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe
* Si vous souhaitez vérifier si x64 ou ARM64 :
    
----

How do I know if I have x86 or ARM?

To determine whether your computer uses an x86 (also known as x86-64 or AMD64) or ARM architecture, you can follow these steps depending on your operating system:

For Windows
* Open System Information:
  * Press Win + R to open the Run dialog.
  * Type msinfo32 and press Enter.
  * This opens the System Information window.
* Check the Processor Information:
  * Look for a line labeled "Processor" or "CPU".
  * If it includes "x64" or refers to Intel or AMD, it is likely x86.
  * If it mentions ARM, then it's an ARM processor.

----

## Installation de VS Code :

* Documentation d'installation en ligne : https://code.visualstudio.com/docs/setup/windows
* Télécharger la version : https://go.microsoft.com/fwlink/?LinkID=534107

## Installation de Volta :

* Documentation d'installation en ligne : https://docs.volta.sh/guide/getting-started
* Ouvrir VS Code
* Ouvrir le terminal intégré (Ctrl + `).
* Exécuter la commande suivante dans le terminal dans VS Code
```bash
  winget install Volta.Volta
```

## Clone du projet :

* Créer un dossier exercice-stage-seconde dans vos documents ou sur votre bureau.
* Ouvrir VS Code.
* Ouvrir le terminal intégré (Ctrl + `).
* Dans le terminal, taper les commandes suivantes pour cloner le projet :
```bash
    cd "chemin/vers/votre/dossier/exercice-stage-seconde"
    git clone https://github.com/BrunoConnectTech/sncfconnect-stage-app-pokemon.git
    cd sncfconnect-stage-app-pokemon
```

## Comment se positionner sur une branche spécifique :

* Pour lister toutes les branches disponibles dans le projet, taper la commande suivante dans le terminal :
```bash
    git branch -r
```

* Pour quitter, taper la touche suivante :
```bash
    q
```

* Pour se positionner sur une branche `npm-de-la-branche`, taper la commande suivante dans le terminal :
```bash
    git checkout npm-de-la-branche
```

## Démarrage de l'exercice par l'étape 1 Hello World :
```bash
    git checkout etape-1-backend-helloworld
```

### Initialisation et démarrage de l'application backend :

* Ouvrir VS Code
* Ouvrir le projet dans VS Code
* Ouvrir un terminal intégré (Ctrl + `).
* Dans le terminal, taper les commandes suivantes pour initialiser le projet et démarrer le serveur :
```bash
    node --version
    npm --version
    npm install
    npm run start
```

## Passage à l'étape 1 Hello World constante :
```bash
    git checkout etape-1-backend-helloworld-exo-constante
```
