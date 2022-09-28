import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.VUE_APP_API_POKE_API,
});

const pokeApi = {
  // Returns a specific pokemon by ID
  getPokemonById: (pokemonId: number) => {
    return apiRequest.get(`/pokemon/${pokemonId}`);
  },

  // Get all Pokemon
  getAllPokemon: () => {
    return apiRequest.get("/pokemon");
  },
};

export default pokeApi;
