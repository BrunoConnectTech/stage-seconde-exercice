import express from 'express';

const app = express();

app.use(express.json());

const router = express.Router();

const port = process.env.PORT || 3000;

// Route "Hello World"
app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello world" });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
