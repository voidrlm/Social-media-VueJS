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

      <v-card-title class="mt-n4 justify-center subtitle-2 accent darken-1"
        >Online<v-icon
          size="15"
          class="ml-2 green--text"
          v-text="'mdi-circle'"
        ></v-icon
      ></v-card-title>
      <v-list nav rounded class="pa-5">
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
      <v-card-title class="mt-n4 justify-center subtitle-2 accent darken-1"
        >Offline<v-icon size="15" class="ml-2" v-text="'mdi-circle'"></v-icon
      ></v-card-title>
      <v-list nav rounded class="pa-5">
        <v-list-item
          v-for="(item, index) in chatOfflineUsers"
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
    chatOfflineUsers: [
      {
        name: "Trevor",
        icon: "https://i.seadn.io/gae/yfPBCBBMIQn8JYil1ryxMbj-W65BASuyg1GO-hz5yU2OqssxX3_xjv9Gkm_Z2DVzaptOvYhjtMfcCv8m-3hS_2D8DbZSoOOUu-KXfzQ?auto=format&w=384",
      },
      {
        name: "Diaz",
        icon: "https://i.seadn.io/gae/eRJhvRT6c_vCYUqdXLnM0jjN1ocCtk9QGwquWe3jcE3LjqcPSwoPzEhyqFoqvXKlE7OMEOiNhJz5plgFadVI8ZzT--TVIYyEUBvYoBM?auto=format&w=384",
      },
      {
        name: "Lisa",
        icon: "https://i.seadn.io/gae/Gc6m1OLOlQPCklPF1PRBnuPGGOatfNcK12GP_3oP5NDJmfJMzG9sLuR1FDX-l6o9ytzvN5rpOVr-bXiQc8O61-lygntZccgLTOkd?auto=format&w=384",
      },
      {
        name: "Franklin",
        icon: "https://i.seadn.io/gae/oB4QsyVjgbGfztP5XQCcA2ePESubzm3znY7OV81_Jmp1r61WXuJxv0aPDuNi6BJyG_pGpYofn5j6Igf2aINm55i5LrzkIc51JdycGm8?auto=format&w=384",
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
