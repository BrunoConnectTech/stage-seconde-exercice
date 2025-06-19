import express from 'express';

const app = express();

app.use(express.json());

const router = express.Router();

const port = process.env.PORT || 3000;

// Route "Hello World"
app.get('/', (req, res) => {
    // TODO:
    // - Créer une variable (constante) qui sera égale au message "Hello world"-
    // - puis utiliser cette variable pour retourner le message dans la réponse res

    res.status(200).json({});

    // Fin TODO
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
