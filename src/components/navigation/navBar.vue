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
          v-for="(item, index) in chatUsers"
          :key="index"
          router
          @click="showMessages()"
          class="mb-3"
        >
          <v-avatar class="mx-5" size="40">
            <img :src="item.icon" :alt="item.name" />
          </v-avatar>

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
      {
        name: "Mike",
        icon: "https://i.seadn.io/gcs/files/f3564ef33373939b024fb791f21ec37b.png?auto=format&w=1000",
      },
      {
        name: "Adam",
        icon: "https://i.seadn.io/gcs/files/a55f9d8aab226d601874bf7593649549.png?auto=format&w=1000",
      },
      {
        name: "Lee",
        icon: "https://i.seadn.io/gae/2JPtlMAPeBAvnvvC_0N8vUAS6a3pJvwtFTi9DSOiWmDanhIt1tM82YjRKjYXiu7agct_RLJRgY1XznZz_FjCmWYrNTc0dJ6OdhNG?auto=format&w=1000",
      },
      {
        name: "Martinez",
        icon: "https://i.seadn.io/gae/Pz5TvlSmoG07-F0ASv_EfKIVj3OVxC-Klfk3BxG1e8iJgLA97go7kh4zqsl0wVFZmQVQ4KeNNqrfcr5V2a-fuSBzvg?auto=format&w=1000",
      },
    ],
  }),
  methods: {
    showMessages() {
      console.log("show messages");
    },
  },
};
</script>
<style></style>
