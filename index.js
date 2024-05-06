let pokemons = [];
const poke_container = getElementById("poke_container");
const url = "https://pokeapi.co/api/v2/pokemon";
const pokemons_number = 151;
const search = getElementById("search");
const form = document.getElementById("form");

const fetchPokemons = async () => {
    for (let i = 1, i <= pokemons_number, i++) {
        await getAllPokemon(i);
    }
    pokemons.forEach((pokemon) => createPokemonCard(pokemon));

};

const removePokemon = () => {
    const pokemonEls = [];
    for (let i = 0; i < pokemonEls.length; i++) {
        const pokemonEl = pokemonEls[i];
        removablePokemons 
    }
}