<template>
  <div>
    <v-card
      class="mx-auto mt-5 rounded-xl"
      elevation="0"
      color="secondary "
      v-for="(post, index) in postsData"
      :key="index"
    >
      <v-card-title>
        <v-list-item class="grow">
          <v-list-item-avatar color="accent">
            <v-img
              class="elevation-6"
              :alt="post.uploadedBy"
              :src="post.uploaderAvatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ post.uploadedBy
              }}<v-icon
                size="15"
                class="ml-2"
                :class="post.isUploaderOnline ? 'green--text' : ''"
                v-text="'mdi-circle'"
              ></v-icon
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-title>

      <v-card-text class="text-h5 mx-4 mt-n2 font-weight-bold">
        {{ post.text }}
      </v-card-text>
      <v-img
        v-if="post.img"
        class="elevation-0"
        :alt="post.uploadedBy"
        :src="post.img"
        max-height="500"
        contain
      ></v-img>
      <v-card-actions>
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-btn icon @click="post.isLiked = !post.isLiked"
              ><v-icon :color="post.isLiked ? 'pink' : ''">
                mdi-heart
              </v-icon></v-btn
            >
            <span class="subheading mr-2">{{
              post.isLiked ? post.likes + 1 : post.likes
            }}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1"> mdi-share-variant </v-icon>
          </v-row>
        </v-list-item>
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
