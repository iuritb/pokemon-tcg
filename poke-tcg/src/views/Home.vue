<template>
  <div>
    <h1>Bem vindo ao mundo do PKM TCG</h1>
    <pre>
      {{ cards }}
    </pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//API
import apiTcg from "@/services/cards";

export default Vue.extend({
  name: "View-Home",

  components: {},
  data() {
    return {
      cards: {} as object,
    };
  },

  mounted() {
    this.loadCards();
  },

  methods: {
    async loadCards() {
      console.log("loadCards");
      await apiTcg.getAllCards("name:charizard").then(({ data }) => {
        console.log("cards =>", data);
        this.cards = data;
      });
    },
  },
});
</script>
