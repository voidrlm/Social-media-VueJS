<template>
  <nav>
    <v-navigation-drawer
      v-model="showNavbarDrawer"
      app
      class="accent"
      width="245"
    >
      <v-list nav rounded class="mt-2 pa-5">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          class="mb-3"
        >
          <v-list-item-icon class="mx-5">
            <v-icon size="30">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-bold">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="primary darken-2 mx-5 mt-n4 mb-n4" />
      <v-list nav rounded class="mt-2 pa-5">
        <v-list-item
          v-for="item in chatUsers"
          :key="item.title"
          router
          :to="item.route"
          class="mb-3"
        >
          <v-list-item-icon class="mx-5">
            <v-icon size="30">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-bold">{{
              item.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <app-bar @openCloseNavBar="showNavbarDrawer = !showNavbarDrawer" />
  </nav>
</template>

<script>
import appBar from "./appBar.vue";
export default {
  components: {
    appBar,
  },

  data: () => ({
    showNavbarDrawer: true,
    items: [
      { title: "Home", icon: "mdi-home", route: "/home" },
      { title: "Discover", icon: "mdi-compass", route: "/discover" },
      { title: "Trending", icon: "mdi-chart-line", route: "/trending" },
    ],
    chatUsers: [
      { name: "Mike", icon: "mdi-account" },
      { name: "Adam", icon: "mdi-account" },
      { name: "Lee", icon: "mdi-account" },
      { name: "Martinez", icon: "mdi-account" },
    ],
  }),
};
</script>
<style></style>
