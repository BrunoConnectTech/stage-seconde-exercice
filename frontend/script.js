// Écoute l'événement DOMContentLoaded pour s'assurer que le DOM est entièrement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", async () => {
    // Récupération des éléments HTML nécessaires
    const pokemonListElement = document.getElementById("pokemon-list");
    const errorElement = document.getElementById("pokemon-list");
    const searchBarElement = document.getElementById("search-bar");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    const pageInfoElement = document.getElementById("page-info");
    const filterButtonsElement = document.getElementById("filter-buttons");

    // Variables pour stocker les données des Pokémon et gérer la pagination
    let pokemonData = [];
    let currentPage = 1;
    const itemsPerPage = 5;

    try {
        // Récupération des données des Pokémon depuis l'API
        const response = await fetch("http://localhost:3000/pokemon");
        const data = await response.json();
        pokemonData = data.pokemon;

        // Extraction des types uniques des Pokémon pour les boutons de filtre
        const types = [...new Set(pokemonData.flatMap(pokemon => pokemon.type))];
        renderFilterButtons(types); // Création des boutons de filtre

        // Affichage initial de la liste des Pokémon
        renderPokemonList(pokemonData, currentPage);
    } catch (error) {
        // Gestion des erreurs lors de la récupération des données
        const errorParagraph = document.createElement("p");
        errorParagraph.innerHTML = `Erreur lors de la récupération des Pokémon : ${error}`;
        errorElement.appendChild(errorParagraph);
    }

    // Ajout d'un écouteur d'événement pour la barre de recherche
    searchBarElement.addEventListener("input", (event) => {
        // Réinitialise le filtre sur "Tous"
        document.getElementById("filter-all").checked = true;

        // Filtre les Pokémon en fonction du terme de recherche
        const searchTerm = event.target.value.toLowerCase();
        const filteredPokemon = pokemonData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm)
        );
        currentPage = 1; // Réinitialise à la première page
        renderPokemonList(filteredPokemon, currentPage);
    });

    // Ajout d'un écouteur d'événement pour le bouton de page précédente
    prevPageButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPokemonList(pokemonData, currentPage);
        }
    });

    // Ajout d'un écouteur d'événement pour le bouton de page suivante
    nextPageButton.addEventListener("click", () => {
        const maxPage = Math.ceil(pokemonData.length / itemsPerPage);
        if (currentPage < maxPage) {
            currentPage++;
            renderPokemonList(pokemonData, currentPage);
        }
    });

    // Fonction pour créer les boutons de filtre en fonction des types de Pokémon
    function renderFilterButtons(types) {
        filterButtonsElement.innerHTML = ""; // Efface les boutons existants

        // Ajout du bouton "Tous"
        const allFilterButton = createRadioButton(
            "filter-all",
            "filter",
            "Tous",
            true,
            () => {
                currentPage = 1;
                renderPokemonList(pokemonData, currentPage);
            }
        );
        filterButtonsElement.appendChild(allFilterButton.button);
        filterButtonsElement.appendChild(allFilterButton.label);

        // Ajout des boutons pour chaque type de Pokémon
        types.forEach(type => {
            const typeFilterButton = createRadioButton(
                `filter-${type}`,
                "filter",
                type,
                false,
                () => {
                    searchBarElement.value = ""; // Réinitialise la barre de recherche
                    const filteredPokemon = pokemonData.filter(pokemon =>
                        pokemon.type.includes(type)
                    );
                    currentPage = 1;
                    renderPokemonList(filteredPokemon, currentPage);
                }
            );
            filterButtonsElement.appendChild(typeFilterButton.button);
            filterButtonsElement.appendChild(typeFilterButton.label);
        });
    }

    // Fonction pour créer un bouton radio et son label associé
    function createRadioButton(id, name, labelText, isChecked, onChangeCallback) {
        const button = document.createElement("input");
        button.type = "radio";
        button.name = name;
        button.id = id;
        button.className = "filterButton";
        button.checked = isChecked;

        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = labelText;
        label.className = "filterLabel";

        button.addEventListener("change", onChangeCallback);

        return { button, label };
    }

    // Fonction pour afficher la liste des Pokémon en fonction de la page actuelle
    function renderPokemonList(pokemonList, page) {
        const startIndex = (page - 1) * itemsPerPage; // Index de début pour la pagination
        const endIndex = startIndex + itemsPerPage; // Index de fin pour la pagination
        const paginatedPokemon = pokemonList.slice(startIndex, endIndex); // Pokémon à afficher sur la page actuelle

        pokemonListElement.innerHTML = ""; // Efface la liste existante
        paginatedPokemon.forEach(pokemon => {
            // Création des éléments HTML pour chaque Pokémon
            const listItem = document.createElement("li");
            listItem.className = "pokemonItem";
            listItem.innerHTML = `<img class="pokemonImg" src="${pokemon.image}" alt="${pokemon.name}"> <p>${pokemon.name}</p>`;
            pokemonListElement.appendChild(listItem);
        });

        // Mise à jour des informations de pagination
        pageInfoElement.textContent = `Page ${page} / ${Math.ceil(pokemonList.length / itemsPerPage)}`;
    }
});