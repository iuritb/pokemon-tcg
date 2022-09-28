<template>
  <v-app>
    <Header />

    <router-view />

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/layout/Header.vue";

import Footer from "@/components/layout/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
});
</script>
