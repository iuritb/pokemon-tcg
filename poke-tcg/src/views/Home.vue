<template>
  <div>
    <v-container class="grey lighten-5" fluid>
      <v-row no-gutters>
        <v-col cols="6" md="3">
          <Aside />
        </v-col>

        <v-col cols="12" sm="6" md="9">
          <template v-for="(card, index) in pokemon">
            <div :key="index">
              <CardPokemon />
            </div>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//API
import apiTcg from "@/services/cards";
import pokeApi from "@/services/pokemon";

// LAYOUTS COMPONENTS
import Aside from "@/components/layout/Aside.vue";
import CardPokemon from "@/components/ui/CardPokemon.vue";

export default Vue.extend({
  name: "View-Home",

  components: {
    Aside,
    CardPokemon,
  },
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
