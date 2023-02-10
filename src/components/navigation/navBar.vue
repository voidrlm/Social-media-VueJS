<template>
  <nav>
    <v-navigation-drawer
      v-model="showNavbarDrawer"
      app
      floating
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

      <v-card-title class="mt-n4 justify-center subtitle-2 accent darken-1 pa-2"
        >Friends</v-card-title
      >
      <v-list nav rounded class="pa-5">
        <v-list-item
          v-for="(item, index) in friendsData"
          :key="index"
          router
          @click="showMessages(item)"
          class="mb-3"
        >
          <v-avatar class="mx-5" size="40">
            <img :src="item.icon" :alt="item.name" />
          </v-avatar>

          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-bold"
              >{{ item.name
              }}<v-icon
                size="15"
                class="ml-2"
                :class="item.isOnline ? 'green--text' : ''"
                v-text="'mdi-circle'"
              ></v-icon
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="text-center">
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            icon
            rounded
            class="my-2"
            :href="link.link"
            target="_blank"
          >
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <app-bar @openCloseNavBar="showNavbarDrawer = !showNavbarDrawer" />
  </nav>
</template>

<script>
import appBar from "./appBar.vue";
import { friendsData } from "../../resources/friendsDatabase";
export default {
  components: {
    appBar,
  },

  data: () => ({
    links: [
      { icon: "mdi-github", link: "https://github.com/voidrlm" },
      { icon: "mdi-twitter", link: "https://twitter.com/voidrlm" },
    ],
    friendsData,
    showNavbarDrawer: true,
    items: [
      { title: "Home", icon: "mdi-home", route: "/home" },
      { title: "Discover", icon: "mdi-compass", route: "/discover" },
      { title: "Trending", icon: "mdi-chart-line", route: "/trending" },
    ],
  }),
  methods: {
    showMessages(user) {
      if (
        this.$router.currentRoute.path !==
        "/messages/" + user.name + user.userId
      ) {
        this.$router.push({
          path: "/messages/" + user.name + user.userId,
        });
        this.$store.dispatch("setUserFromNavbar", user);
      }
    },
  },
};
</script>
<style></style>
