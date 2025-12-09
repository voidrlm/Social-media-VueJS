<template>
  <div>
    <v-card
      class="mx-auto mt-5 rounded-xl transition-swing"
      elevation="4"
      color="secondary"
      v-for="(post, index) in postsData"
      :key="index"
      max-width="700"
    >
      <v-card-title class="pb-2">
        <v-list-item class="grow px-0">
          <v-list-item-avatar color="grey lighten-3" size="48">
            <v-img
              class="elevation-2"
              :alt="post.uploadedBy"
              :src="post.uploaderAvatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold text-h6"
              >{{ post.uploadedBy }}
              <v-icon size="12" class="ml-1 mb-1" color="blue" v-if="true"
                >mdi-check-decagram</v-icon
              >
            </v-list-item-title>
            <v-list-item-subtitle class="caption grey--text">
              {{ new Date(post.timeStamp).toLocaleDateString() }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-list-item>
      </v-card-title>

      <v-card-text
        class="text-body-1 mx-2 mb-2 black--text"
        style="line-height: 1.6"
      >
        {{ post.text }}
      </v-card-text>

      <v-img
        v-if="post.img"
        class="rounded-lg mx-4 mb-2 elevation-1"
        :alt="post.uploadedBy"
        :src="post.img"
        max-height="500"
        contain
      ></v-img>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions class="px-4 py-2">
        <v-btn icon @click="post.isLiked = !post.isLiked" large>
          <v-icon :color="post.isLiked ? 'red' : ''">
            {{ post.isLiked ? "mdi-heart" : "mdi-heart-outline" }}
          </v-icon>
        </v-btn>
        <span class="subheading mr-4 font-weight-medium">{{
          post.isLiked ? post.likes + 1 : post.likes
        }}</span>

        <v-btn icon large>
          <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
        <span class="subheading mr-4 font-weight-medium">24</span>

        <v-spacer></v-spacer>

        <v-btn icon large>
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-icon>mdi-share-variant-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  props: { postsData: Array },
  methods: {},
};
</script>
<style scoped></style>
