<template>
  <v-container fluid>
    <v-card-title
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
      ><v-icon
        size="35"
        class="mr-2"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        >{{
          getGreetingData === "Good Evening"
            ? "mdi-moon-waning-crescent"
            : "mdi-white-balance-sunny"
        }}</v-icon
      >{{ getGreetingData }},
      {{ $store.getters.currentUser.name }} !</v-card-title
    >

    <v-layout justify-start class="mt-7">
      <v-card height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1525138079-9424be9df411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        ></v-img>
      </v-card>
      <v-card height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1523224949444-170258978eef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
        ></v-img>
      </v-card>
      <v-card height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1551818633-579bccc6210c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        ></v-img>
      </v-card>
      <v-card height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1478296046035-d4fc77bec472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ></v-img>
      </v-card>
    </v-layout>
    <v-card class="mx-auto mt-5" color="secondary lighten-3">
      <v-card-title>
        <v-list-item class="grow">
          <v-list-item-avatar color="accent">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avatars.githubusercontent.com/u/117543015?v=4"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Arjun</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold"> lmao bro. </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">69</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "home-component",
  data: () => ({}),
  computed: {
    getGreetingData() {
      var today = new Date();
      var curHr = today.getHours();

      return curHr < 12
        ? "Good Morning"
        : curHr > 18
        ? "Good Evening"
        : "Good Afternoon";
    },
  },
  methods: {},
};
</script>
