// Écoute l'événement DOMContentLoaded pour s'assurer que le DOM est entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", async () => {

    // Récupération de l'élément pokemon-list
    const pokemonListElement = document.getElementById("pokemon-list");

    // Récupération des données des Pokémon depuis l'API avec fetch
    const response = await fetch("http://localhost:3000/pokemon");
    const data = await response.json();
    const pokemonList = data.pokemon;

    // Affichage de la liste de Pokémon dans l'élément pokemon-list

    // Efface la liste existante
    pokemonListElement.innerHTML = "";

    // Boucle sur chaque Pokémon dans la liste
    pokemonList.forEach(pokemon => {
        // Création d'un élément de liste pour chaque Pokémon
        const listItem = document.createElement("li");
        // Ajout d'une classe de style pour chaque élément de la liste
        listItem.className = "pokemonItem";
        // Insertion image et nom dans l'élément de liste
        listItem.innerHTML = `<img class="pokemonImg" src="${pokemon.image}" alt="${pokemon.name}"> <p class="pokemonName">${pokemon.name}</p>`;
        // Ajout de l'élément de liste à l'élément pokemon-list
        pokemonListElement.appendChild(listItem);
    });

});