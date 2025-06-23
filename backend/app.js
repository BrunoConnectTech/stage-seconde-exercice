import express from 'express';

const app = express();

app.use(express.json());

const router = express.Router();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permet toutes les origines
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Route "Hello World"
app.get('/', (req, res) => {
    const message = "Hello world"
    res.status(200).json({ message });
});

// Liste statique de 20 Pokémon avec noms en français
const pokemonList = [
    { id: 1, name: 'Bulbizarre', type: 'Plante', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 20, name: 'Pikachu', type: 'Électrique', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { id: 7, name: 'Carapuce', type: 'Eau', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 15, name: 'Dardargnan', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 3, name: 'Florizarre', type: 'Plante', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 9, name: 'Tortank', type: 'Eau', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 18, name: 'Roucarnage', type: 'Vol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 4, name: 'Salamèche', type: 'Feu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 13, name: 'Aspicot', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 6, name: 'Dracaufeu', type: 'Feu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 11, name: 'Chrysacier', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 2, name: 'Herbizarre', type: 'Plante', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 8, name: 'Carabaffe', type: 'Eau', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 17, name: 'Roucoups', type: 'Vol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 10, name: 'Chenipan', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 5, name: 'Reptincel', type: 'Feu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 14, name: 'Coconfort', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 19, name: 'Rattata', type: 'Normal', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 16, name: 'Roucool', type: 'Vol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 12, name: 'Papilusion', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 21, name: 'Sabelette', type: 'Sol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png' },
    { id: 22, name: 'Sablaireau', type: 'Sol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png' },
    { id: 23, name: 'Nidoran♀', type: 'Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png' },
    { id: 24, name: 'Nidorina', type: 'Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png' },
    { id: 25, name: 'Nidoqueen', type: 'Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png' },
    { id: 26, name: 'Nidoran♂', type: 'Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png' },
    { id: 27, name: 'Nidorino', type: 'Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png' },
    { id: 28, name: 'Nidoking', type: 'Poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png' },
    { id: 29, name: 'Mélofée', type: 'Fée', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png' },
    { id: 30, name: 'Mélodelfe', type: 'Fée', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png' },
    { id: 31, name: 'Goupix', type: 'Feu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png' },
    { id: 32, name: 'Feunard', type: 'Feu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png' },
    { id: 33, name: 'Rondoudou', type: 'Normal', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
    { id: 34, name: 'Grodoudou', type: 'Normal', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png' },
    { id: 35, name: 'Nosferapti', type: 'Vol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png' },
    { id: 36, name: 'Nosferalto', type: 'Vol', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png' },
    { id: 37, name: 'Mystherbe', type: 'Plante', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png' },
    { id: 38, name: 'Ortide', type: 'Plante', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png' },
    { id: 39, name: 'Rafflesia', type: 'Plante', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png' },
    { id: 40, name: 'Paras', type: 'Insecte', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png' }
];

// Route "Liste Pokemon"
app.get('/pokemon', (req, res) => {
    const copyPokemonList = [...pokemonList]
    const sortedPokemonList = copyPokemonList.sort((a, b) => a.name.localeCompare(b.name))

    res.status(200).json({ pokemon: sortedPokemonList });
});

// Route "Récupérer un Pokemon avec l'id"
app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    const pokemon = pokemonList.find(p => p.id === parseInt(id));

    if (!pokemon) {
        return res.status(404).json({ error: "Pokémon non trouvé" });
    }

    res.status(200).json(pokemon);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
