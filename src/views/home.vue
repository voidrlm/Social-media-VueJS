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
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1525138079-9424be9df411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        ></v-img>
      </v-card>
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1523224949444-170258978eef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
        ></v-img>
      </v-card>
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1551818633-579bccc6210c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        ></v-img>
      </v-card>
      <v-card elevation="12" height="230" width="170" color="blue" class="mr-4">
        <v-img
          height="230"
          src="https://images.unsplash.com/photo-1478296046035-d4fc77bec472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ></v-img>
      </v-card>
    </v-layout>
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
};
</script>
