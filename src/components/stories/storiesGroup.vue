<template>
  <div>
    <v-layout justify-start class="mt-3 mb-5">
      <v-slide-group class="pa-0" show-arrows>
        <v-slide-item
          v-for="(story, index) in storiesData"
          :key="index"
          class="mx-2"
        >
          <v-hover v-slot="{ hover }">
            <div
              class="d-flex flex-column align-center"
              style="cursor: pointer"
              @click="expandStory(story)"
            >
              <div
                class="story-ring pa-1 rounded-circle"
                :class="{
                  'gradient-border': !story.isViewed,
                  'grey lighten-2': story.isViewed,
                }"
              >
                <v-avatar size="70" class="white">
                  <v-img :src="story.img" class="rounded-circle">
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="black"
                      opacity="0.3"
                    >
                      <v-icon color="white">mdi-play</v-icon>
                    </v-overlay>
                  </v-img>
                </v-avatar>
              </div>
              <span class="caption mt-1 text-truncate" style="max-width: 70px">
                {{ getStoryUserName(story.userId) }}
              </span>
            </div>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-layout>
    <v-dialog v-model="showStoryPreview" width="400" content-class="rounded-xl">
      <v-card class="black" dark height="700">
        <v-img :src="selectedStory.img" height="100%" class="align-start">
          <v-overlay absolute opacity="0.2"></v-overlay>
          <div
            class="d-flex align-center pa-4"
            style="z-index: 2; position: relative"
          >
            <v-avatar size="40" class="mr-3">
              <img
                :src="selectedStory.user ? selectedStory.user.icon : ''"
                alt="alt"
              />
            </v-avatar>
            <span class="font-weight-bold">{{
              selectedStory.user ? selectedStory.user.name : ""
            }}</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="showStoryPreview = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </div>
        </v-img>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { storiesData } from "@/resources/storiesDatabase";
import { friendsData } from "@/resources/friendsDatabase";
export default {
  components: {},
  data: () => ({
    storiesData,
    friendsData,
    showStoryPreview: false,
    selectedStory: {},
  }),
  methods: {
    getStoryUserName(userId) {
      const user = this.friendsData.find((u) => u.userId === userId);
      return user ? user.name : "User";
    },
    expandStory(story) {
      this.showStoryPreview = true;
      this.selectedStory = story;
      let user = this.friendsData.filter(function (user) {
        return user.userId === story.userId;
      });

      this.selectedStory.user = user[0];
    },
  },
};
</script>
<style scoped>
.story-ring {
  border: 2px solid transparent;
  transition: transform 0.2s;
}
.story-ring:hover {
  transform: scale(1.05);
}
.gradient-border {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      )
      border-box;
  border: 3px solid transparent;
}
</style>
