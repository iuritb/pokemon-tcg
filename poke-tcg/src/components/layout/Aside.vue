<template>
  <aside class="aside">
    <v-navigation-drawer>
      <template v-slot:prepend>
        <v-list-item two-line>
          <h3>What Pokémon are you looking for?</h3>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </aside>
</template>

<script lang="ts">
export default {
  name: "Aside-Layout",

  data: () => ({
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
  }),
};
</script>

<style lang="scss">
aside {
  height: 100vh;
}
</style>
