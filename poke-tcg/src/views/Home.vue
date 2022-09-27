<template>
  <div>
    <h1>Bem vindo ao mundo do PKM TCG</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//API
import apiTcg from "@/services/cards";
import pokeApi from "@/services/pokemon";

export default Vue.extend({
  name: "View-Home",

  components: {},
  data() {
    return {
      allCards: {} as object,
      cardsByName: {} as object,
      pokemon: {} as object,
    };
  },

  mounted() {
    this.loadCards();
    this.loadCardsByName();
    this.loadPokemon();
  },

  methods: {
    async loadCards() {
      console.log("loadCards");
      await apiTcg.getAllCards().then(({ data }) => {
        console.log("all cards =>", data);
        this.allCards = data;
      });
    },
    async loadCardsByName() {
      console.log("loadCardByName");
      await apiTcg.getCardsByName("charizard").then(({ data }) => {
        console.log("cards by name =>", data);
        this.cardsByName = data;
      });
    },
    async loadPokemon() {
      console.log("loadPokemon");
      await pokeApi.getAllPokemon().then(({ data }) => {
        console.log("pokemon list =>", data);
        this.pokemon = data;
      });
    },
  },
});
</script>
