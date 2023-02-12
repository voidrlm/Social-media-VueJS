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
    <storiesGroup />
    <postCard :postsData="postsData" />
  </v-container>
</template>
<script>
import postCard from "@/components/posts/postCard.vue";
import storiesGroup from "@/components/stories/storiesGroup.vue";
import { postsData } from "@/resources/postsDatabase";
import { friendsData } from "@/resources/friendsDatabase";
export default {
  name: "home-component",
  data: () => ({ postsData, friendsData }),
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
  components: { storiesGroup, postCard },
  created() {
    postsData.map((post) => {
      let userObject = friendsData.filter(function (user) {
        return user.userId === post.userId;
      });
      post.uploaderId = userObject[0].userId;
      post.uploadedBy = userObject[0].name;
      post.uploaderAvatar = userObject[0].icon;
      post.isUploaderOnline = userObject[0].isOnline;
    });
  },
  methods: {},
};
</script>
